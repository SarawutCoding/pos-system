import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { signIn } from "next-auth/react";

const authOption = {
  providers: [
    Github({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const user = { id: '1' }
        return user
      }
    })
  ],
  session: {
    stratrty : "jwt"
  },
  secret : process.env.NEXTAUTH_SECRET,
  page: {
    signIn: "/login"
  }

}


const headler = NextAuth(authOption);
export { headler as GET, headler as POST }; 