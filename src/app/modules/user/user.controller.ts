import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User create successfully..!",

    data: result,
  });
};

export const userController = {
    createUser
}