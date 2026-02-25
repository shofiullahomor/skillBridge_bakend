import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthService } from "./auth.service";

const createUser = async(req: Request, res: Response)=>{
    try{
        const result = await AuthService.createUserIntoDB(req.body)
        res.status(201).json({
            success: true,
            message: "User Created",
            data: result
        })
    }catch(error){
        console.log(error)
    }
}
// login 
const loginUser = async(req: Request, res: Response)=>{
    try{
        const result = await AuthService.loginUserIntoDB(req.body)
        res.status(200).json({
            success: true,
            message: "User Created",
            data: result
        })
    }catch(error){
        console.log(error)
    }
}

export const AuthController = {
    // Add controller methods here
    createUser,
    loginUser,
    };