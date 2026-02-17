import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export async function aiAgent({
  modelName,
  reqTools = [],
  prompt,
}: {
  reqLlm?: string;
  modelName: string;
  reqTools?: object[];
  prompt: string;
}) {
  const llm = new ChatOpenAI({
    modelName,
  });

  const multiply = tool(
    async (input: unknown) => {
      const { a, b } = input as { a: number; b: number };
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
      const { a, b } = input as { a: number; b: number };
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
    async (input: unknown) => {
      const { a, b } = input as { a: number; b: number };
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

  const tools = [add, multiply, divide, ...(reqTools as typeof add[])];
  const toolsByName = Object.fromEntries(tools.map((t) => [(t as { name: string }).name, t]));
  const llmWithTools = llm.bindTools(tools);

  async function llmCall(state: (typeof MessagesAnnotation)["State"]) {
    const result = await llmWithTools.invoke([
      { role: "system", content: prompt },
      ...state.messages,
    ]);
    return { messages: [result] };
  }

  const toolNode = new ToolNode(tools);

  function shouldContinue(state: (typeof MessagesAnnotation)["State"]) {
    const messages = state.messages;
    const lastMessage = messages.at(-1);
    if ((lastMessage as { tool_calls?: unknown[] })?.tool_calls?.length) {
      return "Action";
    }
    return "__end__";
  }

  const agentBuilder = new StateGraph(MessagesAnnotation)
    .addNode("llmCall", llmCall)
    .addNode("tools", toolNode)
    .addEdge("__start__", "llmCall")
    .addConditionalEdges("llmCall", shouldContinue, {
      Action: "tools",
      "__end__": "__end__",
    })
    .addEdge("tools", "llmCall")
    .compile();

  const result = await agentBuilder.invoke({
    messages: [{ role: "user", content: prompt }],
  });
  return result.messages;
}
