
const UserService =require('../services/user-service');
const {response} = require('express');
const userService = new UserService();

const create = async (req,res)=>{
    try {
        const response = await userService.create({
            email:req.body.email,
            password:req.body.password
        });

         return res.status(200).json({
            data:response,
            message:"Successfully created a user",
            success:true,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:"Something went wrong",
            success:false,
            err:error
        });
    }
}
const signIn = async(req,res)=>{
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:response,
            message:"Successful Sign In and Token Generated",
            success:true,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:"Something went wrong",
            success:false,
            err:error
        });
    }
}
module.exports ={
    create,
    signIn
}