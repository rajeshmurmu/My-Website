import UserModel from "@/models/usermodel";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  await connectDB();
  const { email, password } = await request.json();

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User does not exists",
        },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return Response.json(
        {
          success: false,
          message: "Invalid Credentials",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Login Successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(`Error While Login User`, error);
    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
