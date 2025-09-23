import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/app.config";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) throw new Error();
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;

    if (!decoded) throw new Error();

    req.userId = decoded.userId;

    next();
  } catch (error) {
    throw new Error();
  }
};
