import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "8d5c9e6aecb828bbf664",
      clientSecret: "f032ccfea81ae92b16b2bb278a5b0070d98e0c2a",
    }),
  ],
  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
