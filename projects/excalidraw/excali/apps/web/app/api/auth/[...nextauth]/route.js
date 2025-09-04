import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"

console.log("NextAuth route loaded");

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "example@example.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {

        console.log(credentials)
        // 1. Validate the data exists
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await axios.post("http://localhost:3008/signin",
            {
                email: credentials.email,
                password: credentials.password
            }
        )

        console.log(user)

        // 3. Return user object if valid
        if (user.status === 200 && user.data) {
            console.log("from the backend", user.data); // check structure here
            return {
              password: user.data.password,       
              email: user.data.email, 
              name: user.data.name
            };
          }

        // If login fails
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin", 
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
