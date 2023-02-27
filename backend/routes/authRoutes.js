import express from "express";
import  registerController from "../controller/authController.js";
import  loginController  from "../controller/loginController.js";
import { testController } from "../controller/testController.js";
import { isAdmin}  from "../middilwares/adminAccess.js";
import { requireSignIn } from "../middilwares/authMiddleware.js";

// router objects
const authRoute=express.Router()

//routing 
//register
authRoute.post('/register',registerController)
//LOGIN POST
authRoute.post('/login',loginController)
//test routes
authRoute.get('/test',requireSignIn,isAdmin,testController)
export default authRoute