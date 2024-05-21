import UserModel from "@/models/usermodel";
import connectDB from "@/utils/connectDB";
import sendVerificationCode from "@/utils/sendVerificationCode";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  await connectDB();

  const { username, email, password } = await request.json();

  try {
    if (!username || !email || !password) {
      return Response.json(
        {
          success: false,
          message: "All Fields Are Required",
        },
        { status: 200 }
      );
    }

    const existedUser = await UserModel.findOne({ email });
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyCodeExpiry = new Date(Date.now() + 3600000);

    if (existedUser) {
      if (existedUser.isVerified) {
        return Response.json(
          {
            success: false,
            message: "User Already Exist",
          },
          { status: 200 }
        );
      } else {
        existedUser.password = hashedPassword;
        existedUser.verifyCode = verifyCode;
        existedUser.verifyCodeExpiry = verifyCodeExpiry;
        await existedUser.save();
      }
    } else {
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry,
      });

      await newUser.save();
      console.log("saved user", newUser);
    }

    // send verification email
    const emailResponse = await sendVerificationCode({
      username,
      email,
      verifyCode,
    });

    if (!emailResponse) {
      return Response.json(
        { success: false, message: "Something Went Wrong" },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "SignUp SuccessFully | Please Verify Your Email.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(`Error While Registering User`, error);
    return Response.json(
      {
        success: false,
        message: "Error While Registering User",
      },
      { status: 500 }
    );
  }
}
