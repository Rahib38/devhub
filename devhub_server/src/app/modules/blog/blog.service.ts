import prisma from "../../../shared/prisma";

const createBlog = async (data: any) => {
  const userData = {
    title: data.title,
    content: data.content,
    author: data.author,
  };

  const result = await prisma.blog.create({
    data: userData,
  });

  return result;
};

const getAllBlogFromDB = async () => {
  const result = await prisma.blog.findMany();
  return result;
};

const getSingleBlogFromDB = async (blogId: string) => {
  const result = await prisma.blog.findUnique({
    where: { blogId },
  });
  return result;
};

const updateBlogFromDB = async (blogId: string, data: any) => {
  const result = await prisma.blog.update({
    where: { blogId },
    data,
  });
  return result;
};

const deleteBlogFromDB = async (blogId: string) => {
  const result = await prisma.blog.delete({ where: { blogId } });
  return result;
};

export const blogService = {
  createBlog,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  updateBlogFromDB,
  deleteBlogFromDB,
};
