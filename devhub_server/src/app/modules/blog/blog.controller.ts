import { Request, Response } from "express";
import status from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { blogService } from "./blog.service";

const createBlog = async (req: Request, res: Response) => {
  const result = await blogService.createBlog(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog create successfully..!",

    data: result,
  });
};

const getAllBlog = async (req: Request, res: Response) => {
  const result = await blogService.getAllBlogFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Get blog successfully..!",
    data: result,
  });
};

const getSingleBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogService.getSingleBlogFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Get single blog successfully..!",
    data: result,
  });
};

const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogService.updateBlogFromDB(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " update blog successfully..!",
    data: result,
  });
};

const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogService.deleteBlogFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " Delete blog successfully..!",
    data: result,
  });
};

export const BlogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
