import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";


const createUser = async (data: any) => {
    const hashedPassword:string = await bcrypt.hash(data.password, 12)
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

export const userService = {
  createUser,
};
