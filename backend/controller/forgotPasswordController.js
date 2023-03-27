import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"


const forgotPasswordController=async(req,res)=>{
try {
    const {email,newPassword,answer}=req.body
    if (!email) {
        res.status(400).send({message:'Email is required'})
    }
    if (!answer) {
        res.status(400).send({message:'answer is required'})
    }
    if (!newPassword) {
        res.status(400).send({message:'New Password is required'})
    }
  // check email and answer
  const user =await userModel.findOne({email,answer})
  //validation
  if (!user) {
    return res.status(404).send({
        success:false,
        message:"wrong email or answer"
    })
  }
  console.log(res);
  const hashed =await hashPassword(newPassword);
  await userModel.findByIdAndUpdate(user._id,{password:hashed});
  res.status(200).send({
      success:true,
      message:"Password Reset Successfully",
  });
  console.log(res);
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  } 
       
};
  
export default forgotPasswordController;