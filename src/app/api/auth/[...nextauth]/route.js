import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectMongo } from "../../../../../lib/mongoConnect";
import User from "../../../../../model/user";
import bcrypt from "bcryptjs";

const authOption = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        
        await connectMongo();
        const user = await User.findOne({ email });

        if (!user) {
          return null;
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
          return null;
        }

        return user;

      }
    })
  ],
  session: {
    stratrty : "jwt"
  },
  secret : process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  }

}


const headler = NextAuth(authOption);
export { headler as GET, headler as POST }; 