// import { Request, Response } from "express";
// import { asyncHandler } from "../middlewares/asyncHandler.middleware";
// import {
//   userLoginSchema,
//   userRegistrationSchema,
// } from "../validations/user.validation";

// export const registerUserController = asyncHandler(
//   async (req: Request, res: Response) => {
//     // validate the input against a schema
//     const user = userRegistrationSchema.parse(req.body);
//     // Check if the user exists
//     await getUserByEmailService(user.email);
//     // Hash the user password
//     // create the user on the database
//     // return user id and jwt
//   }
// );
