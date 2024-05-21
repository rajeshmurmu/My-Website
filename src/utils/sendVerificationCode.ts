import nodemailer from "nodemailer";
const sendVerificationCode = async (user: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      host: "smpt.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"rajeshmurmu.com" , ${process.env.EMAIL}<`,
      to: user.email,
      // subject: "Email Verification Message",
      subject: "Email Verification Message",
      // text: "This is a test message for verfiy email",
      // html: "<p>HTML version of the message</p>",
      html: `
    <div>
    <h2>Hello ${user.username}</h2>
    <p>This is Email Verification Message From rajeshmurmu.com by rajesh murmu  <a href="http://localhost:3000/verifyemail">click here</a> to verify your email</p>
    <br>
    <h3>Your Email verification Code is :<b> ${user.verifyCode} </b></h3>
    
    </div>`,
    };

    const emailResponse = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return emailResponse;
  } catch (error) {
    console.log(`Error While sending vefication Email`, error);
  }
};

export default sendVerificationCode;
