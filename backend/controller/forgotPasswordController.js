import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"


const forgotPasswordController=async(req,res)=>{
try {
    const {email,question,newPassword}=req.body
    if (!email) {
        res.send(400).send({message:'Email is required'})
    }
    if (!answer) {
        res.send(400).send({message:'answer is required'})
    }
    if (!newPassword) {
        res.send(400).send({message:'New Password is required'})
    }
  // check email and answer
  const user =await userModel.findOne({email,answer})
  //validation
  if (!user) {
    return res.send(404).send({
        success:false,
        message:"wrong email or answer"
    })
  }
  const hashed =await hashPassword(newPassword);
  await userModel.findByIdAndDelete(user._id,{password:hashed});
  res.status(200).send({
      success:true,
      message:"Password Reset Successfully",
  });


} catch (error) {
    console.log(err
        );
        res.status(500).send({
            success:false,
            message:"somthing went wrong",
            error
    })
  }
       
}

export default forgotPasswordController;