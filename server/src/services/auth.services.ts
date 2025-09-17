import { UserType } from "../@types";
import { config } from "../config/app.config";

import { sendVerificationEmail, sendWelcomeEmail } from "../mailers/mailer";

import UserModel from "../models/user.model";
import { generateJWT } from "../utils/jwt";
import { generateVerificationCode } from "../utils/uuid";
import bcrypt from "bcryptjs";

export const registerUserService = async (data: UserType) => {
  const { email, username, password } = data;

  const userExists = await UserModel.findOne({ email: email });
  if (userExists) {
    throw new Error("User with this email already exists");
  }

  const verificationCode = generateVerificationCode();
  const verificationCodeExpiryDate = Date.now() + 2 * 60 * 60 * 1000;

  const hashedPassword = await bcrypt.hash(password, config.AUTH_SALT);

  const user = new UserModel({
    email: email,
    username: username,
    password: hashedPassword,
    verificationCode: verificationCode,
    verificationCodeExpiryDate: verificationCodeExpiryDate,
  });

  await user.save();

  const token = generateJWT(user.id);

  await sendVerificationEmail(user.email, user.verificationCode);

  return { user, token };
};

// TO-DO : use updateOne function to search and update the record as one query
export const verifyUserService = async (verificationCode: string) => {
  const user = await UserModel.findOne({
    verificationCode: verificationCode,
    verificationCodeExpiryDate: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("Invalid or expired verification code");
  }

  user.set("verified", true);
  user.set("verificationCode", undefined);
  user.set("verificationCodeExpiryDate", undefined);

  await user.save();
  await sendWelcomeEmail(user.email);

  return user;
};
