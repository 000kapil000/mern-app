import express from "express";
import  registerController from "../controller/authController.js";
import  loginController  from "../controller/loginController.js";
//router objects
const authRoute=express.Router()
//routing 
//register
authRoute.post('/register',registerController)
//LOGIN POST
authRoute.post('/login',loginController)
export default authRoute