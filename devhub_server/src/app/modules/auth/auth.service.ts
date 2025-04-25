import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";

import jwt from 'jsonwebtoken'

const loginUser = async (payload: { email: string; password: string }) => {
    const result = await prisma.user.findUnique({
        where:{
            email:payload.email
        }
    })
    const isCorrectPassword:boolean = await bcrypt.compare(payload.password, result?.password as string)

    if(!isCorrectPassword){
        throw new Error("password incorrect!")
    }

    const accessToken = jwt.sign({ email:result?.email }, "abc", { algorithm: 'HS256', expiresIn:"15m" });
    console.log({accessToken})

    const refreshToken = jwt.sign({ email:result?.email }, "xyz", { algorithm: 'HS256', expiresIn:"30d" });
    console.log({accessToken})

    return{
        accessToken,refreshToken
    }
};

export const authServices = {
  loginUser,
};
