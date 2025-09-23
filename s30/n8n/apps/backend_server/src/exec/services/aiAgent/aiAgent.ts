import { tool } from "@langchain/core/tools"
import { z } from "zod"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from 'dotenv'
import path from "path";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../../../../.env") });


export async function aiAgent({
    reqLlm, 
    modelName, //'gpt-4o'
    reqTools,
    prompt,

}:{
  reqLlm?: string,
  modelName: string,
  reqTools?: Object[],
  prompt: string


}){
  
  console.log("ai agent was called")
  const llm = new ChatOpenAI({
  modelName: modelName
  })

  const multiply = tool(
  async (input: unknown) => {
    const { a, b } = input as { a: number, b: number }
    return a * b;
  },
  {
    name: "multiply",
    description: "Multiply two numbers together",
    schema: z.object({
      a: z.number().describe("first number"),
      b: z.number().describe("second number"),
    }),
  }
  );

  const add = tool(
  async (input: unknown) => {
    const { a, b } = input as { a: number; b: number }
    return a + b;
  },
  {
    name: "add",
    description: "Add two numbers together",
    schema: z.object({
      a: z.number().describe("first number"),
      b: z.number().describe("second number"),
    }),
  }
  );

  const divide = tool(
  async (input) => {
    const { a, b } = input as { a: number; b: number }
    return a / b;
  },
  {
    name: "divide",
    description: "Divide two numbers",
    schema: z.object({
      a: z.number().describe("first number"),
      b: z.number().describe("second number"),
    }),
  }
  );

  const tools = [add, multiply, divide];
  //@ts-ignore
  tools.push(...reqTools)
  const toolsByName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));
  const llmWithTools = llm.bindTools(tools);

  async function llmCall(state: typeof MessagesAnnotation.State) {

  const result = await llmWithTools.invoke([
    {
      role: "system",
      content: prompt
    },
    ...state.messages
  ]);

  return {
    messages: [result]
  };
  }

  const toolNode = new ToolNode(tools);

  function shouldContinue(state: typeof MessagesAnnotation.State) {
    const messages = state.messages;
    const lastMessage = messages.at(-1);

    // If the LLM makes a tool call, then perform an action
    //@ts-ignore
    if (lastMessage?.tool_calls?.length) {
      return "Action";
    }
    // Otherwise, we stop (reply to the user)
    return "__end__";
  }

  const agentBuilder = new StateGraph(MessagesAnnotation)
  .addNode("llmCall", llmCall)
  .addNode("tools", toolNode)
  // Add edges to connect nodes
  .addEdge("__start__", "llmCall")
  .addConditionalEdges(
    "llmCall",
    shouldContinue,
    {
      // Name returned by shouldContinue : Name of next node to visit
      "Action": "tools",
      "__end__": "__end__",
    }
  )
  .addEdge("tools", "llmCall")
  .compile();

  const messages = [{
  role: "user",
  content: prompt
  }];


  const result = await agentBuilder.invoke({ messages });
  console.log("form ai agent", result.messages)
  return(result.messages);

}


