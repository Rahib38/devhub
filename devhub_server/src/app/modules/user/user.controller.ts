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

const getAllUser = async (req: Request, res: Response) => {
  const result = await userService.getAllUserFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Get user successfully..!",
    data: result,
  });
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userService.getSingleUserFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Get single user successfully..!",
    data: result,
  });
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userService.updateUserFromDB(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " update user successfully..!",
    data: result,
  });
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userService.deleteUserFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " Delete user successfully..!",
    data: result,
  });
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
