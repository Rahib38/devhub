import express from "express";
import { BlogController } from "./blog.controller";
const blogRouter = express.Router();

blogRouter.post("/blogs", BlogController.createBlog);

blogRouter.get("/blogs", BlogController.getAllBlog);

blogRouter.get("/blogs/:id", BlogController.getSingleBlog);

blogRouter.put("/blogs/:id", BlogController.updateBlog);

blogRouter.delete("/blogs/:id", BlogController.deleteBlog);

export default blogRouter;
