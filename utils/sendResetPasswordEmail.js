import SendEmail from "./SendEmail.js";

const sendResetPasswordEmail = async ({
  name,
  email,
  passwordToken,
  origin,
}) => {
  const resetEmail = `${origin}/user/reset-password?token=${passwordToken}&email=${email}`;
  const message = `<p>Please reset password by clicking on the following link :<a href="${resetEmail}">reset password</a></p>`;
  return SendEmail({
    to: email,
    subject: "Reset Password",
    html: `Hello ${name}, ${message}`,
  });
};
export default sendResetPasswordEmail;
