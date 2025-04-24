import * as bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

const createUser = async (data: any) => {
  const hashedPassword: string = await bcrypt.hash(data.password, 12);
  const userData = {
    username: data.username,
    email: data.email,
    password: hashedPassword,
  };

  const result = await prisma.user.create({
    data: userData,
  });

  return result;
};

const getAllUserFromDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await prisma.user.findUnique({
    where: { userId },
  });
  return result;
};

const updateUserFromDB = async (userId: string, data: any) => {
  const result = await prisma.user.update({
    where: { userId },
    data,
  });
  return result;
};

const deleteUserFromDB = async (userId: string) => {
  const result = await prisma.user.delete({ where: { userId } });
  return result;
};

export const userService = {
  createUser,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
