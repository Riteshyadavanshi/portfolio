"use server";

import nodemailer from "nodemailer";
type FormData = {
  email: string;
  subject: string;
  message: string;
};
export const sendEmail = async (formData: FormData) => {
  const { email, subject, message } = formData;
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "riteshyadav4122@gmail.com",
      pass: "udnc jjbr mewd tnwy",
     },
  });
  const mailOptions = {
    from: email,
    to: "riteshyadav4122@gmail.com",
    subject: subject,
    html: `
        <!DOCTYPE html>
         <html>
      <body>
        <div>
        <h1>Email</h1>
        <p>Email:${email}</p>
        <p>Subject:${subject}</p>
        <p>Message:${message}</p>
        </div>
        
         </body>
         </html>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
