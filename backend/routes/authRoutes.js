import express from "express";
import  registerController from "../controller/authController.js";
import forgotPasswordController from "../controller/forgotPasswordController.js";
import  loginController  from "../controller/loginController.js";
import { testController } from "../controller/testController.js";
import { isAdmin}  from "../middilwares/adminAccess.js";
import { requireSignIn } from "../middilwares/authMiddleware.js";

// router objects
const router=express.Router()

//routing 
//register
router.post('/register',registerController)
//LOGIN POST
router.post('/login',loginController)
//forgot password
router.post('/forgotpassword',forgotPasswordController)
//test routes
router.get('/test',requireSignIn,isAdmin,testController)
export default router