import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import {
  userLoginSchema,
  userRegistrationSchema,
  verificationCodeSchema,
} from "../validations/user.validation";
import {
  registerUserService,
  verifyUserService,
} from "../services/auth.services";
import { HTTPSTATUS } from "../config/http.config";

export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const data = userRegistrationSchema.parse(req.body);

    const { user, token } = await registerUserService(data);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, //TO-DO: Take value from env file
      sameSite: "strict",
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    res.status(HTTPSTATUS.CREATED).json({ ...user._doc, password: undefined });
  }
);
export const verifyEmailController = asyncHandler(
  async (req: Request, res: Response) => {
    const { verificationCode } = verificationCodeSchema.parse(req.body);

    const user = await verifyUserService(verificationCode);
    res.status(HTTPSTATUS.CREATED).json({ ...user._doc, password: undefined });
  }
);
