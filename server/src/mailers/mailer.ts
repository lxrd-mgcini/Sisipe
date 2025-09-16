import { config } from "../config/app.config";
import { Resend } from "resend";
import { mailConfig } from "../config/mail.config";
import { VERIFICATION_EMAIL_TEMPLATE } from "./templates/auth";
import { MailerParams } from "../@types";

const resend = new Resend(config.RESEND_API_KEY);

// Create general function to send an email.Then create wrapper functions that use the general function to send specific email e.g verificationEmail function uses sendEmail under the hood

export const sendVerificationEmail = async (
  recipient: string,
  verificationCode: string
) => {
  sendEmail({
    to: [recipient],
    from: mailConfig.NO_REPLY_EMAIL_ADDRESS,
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ),
    subject: "Verify your email",
  });
};

// Generic sendEmailFunction
const sendEmail = async ({
  to,
  from,
  subject,
  //   text,
  html,
}: MailerParams) =>
  await resend.emails.send({
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
  });
