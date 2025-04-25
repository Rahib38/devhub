import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { authServices } from "./auth.service";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.loginUser(req.body);
  const { refreshToken } = result;
  res.cookie("refreshToken", refreshToken,{
    secure:false,
    httpOnly:true
  });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "user login successfully..!",

    data: {
       accessToken: result.accessToken 
    },
  });
});

export const authController = {
  loginUser,
};
