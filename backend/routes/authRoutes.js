import express from "express";
import  registerController from "../controller/authController.js";
//router objects
const authRoute=express.Router()
//routing 
//register
authRoute.post('/register',registerController)

export default authRoute