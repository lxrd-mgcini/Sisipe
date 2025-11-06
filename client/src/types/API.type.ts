export type registerType = {
  //   name: string;
  email: string;
  password: string;
};



export type loginType = { email: string; password: string };

export type LoginResponseType = {
  message: string;
  user: {
    _id: string;
    username: string;
    email: string;
    role: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    resetPasswordExpiryDate: string;
    resetPasswordToken: string;
  };
};
