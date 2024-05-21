import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/utils/connectDB";
import UserModel from "@/models/usermodel";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "Email",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any): Promise<any> {
        await connectDB();
        try {
          const user = await UserModel.findOne({
            email: credentials.email,
          }).select("-verifyCodeExpiry -verifyCode");
          if (!user) {
            throw new Error("Invalid Credentials");
          }

          // UnComment Before production
          // if (!user.isVerified) {
          //   throw new Error("Please verify your account before login");
          // }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid Email or Password");
          }
          user.password = undefined;
          return user;

          // console.log("Credentials", credentials);
          // console.log("req", req);
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ...add more providers here
  ],

  callbacks: {
    // Signin with github
    async signIn({ account, user, profile, credentials, email }): Promise<any> {
      connectDB();

      if (account?.provider === "credentials") {
        // console.log("account", account);
        // console.log("user", user);
        // console.log("profile", profile);
        // console.log("credentials", credentials);
        // console.log("email", email);
        return user;
      }

      if (account?.provider === "github") {
        try {
          const existedUser = await UserModel.findOne({
            email: user.email,
          }).select("-password");

          if (existedUser) {
            return existedUser;
          } else {
            const newUser = await UserModel.create({
              username: user?.name,
              email: user?.email,
              password: account.providerAccountId,
              isVerified: true,
              verifyCode: undefined,
              verifyCodeExpiry: undefined,
            });

            if (newUser) {
              return newUser;
            }
          }

          return null;
        } catch (error: any) {
          throw new Error("Error login with github", error);
        }
      }

      if (account?.provider === "google") {
        // console.log("account", account);
        // console.log("user", user);
        // console.log("profile", profile);
        // console.log("credentials", credentials);
        // console.log("email", email);
        // return true;

        try {
          const existedUser = await UserModel.findOne({
            email: user.email,
          }).select("-password");

          if (existedUser) {
            return existedUser;
          } else {
            const newUser = await UserModel.create({
              username: user?.name,
              email: user?.email,
              password: account.providerAccountId,
              isVerified: true,
              verifyCode: undefined,
              verifyCodeExpiry: undefined,
            });

            if (newUser) {
              return newUser;
            }

            console.log("existed User", existedUser);
            console.log("new User", newUser);
          }

          return null;
        } catch (error: any) {
          throw new Error("Error login with google", error);
        }
      }

      return null;
    },

    async jwt({ token, user }: any): Promise<any> {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;
        token.email = user.email;
        token.isVerified = user.isVerified;
      }

      return token;
    },

    async session({ session, token }): Promise<any> {
      // console.log("Token", token);
      if (token) {
        session.user = token;
      }
      // console.log("Session", session);
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
