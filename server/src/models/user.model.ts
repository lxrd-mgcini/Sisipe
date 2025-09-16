import mongoose, { Document, Schema } from "mongoose";
import { RoleEnum } from "../enums/role.enum";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  role: RoleEnum;
  verificationCode: string;
  verificationCodeExpiryDate: Date;
  resetPasswordToken: string;
  resetPasswordExpiryDate: Date;
  _doc:any
}

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: Object.values(RoleEnum),
      default: RoleEnum.USER,
      required: true,
      trim: true,
    },
    verificationCode: String,
    verificationCodeExpiryDate: Date,
    resetPasswordToken: String,
    resetPasswordExpiryDate: Date,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocument>("Users", userSchema);
export default UserModel;
