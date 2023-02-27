import  {comparePassword}  from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken"
const loginController=async(req,res)=>{
try {
    const{email,password}=req.body
    //validation
    if (!email|| !password){ 
        return res.status(404).send({
        success:false,
        message:"Invalid email or password"
    })}
    //check userr
    const user=await userModel.findOne({email})
  if (!user) {
    return req.status(404).send({
        success:false,
        message:"email is not registerd"
    })
  }
    const match=await comparePassword (password,user.password)
    if (!match) {
        return res.status(200).send({
         success:false,
         message:"Invalid password "
        })
    }
    //token
const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
    expiresIn:"7d",
 });
res.status(200).send({
    success:true,
    message:"user login successfully",
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
    },
    token,
})
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in login",
        error
    })
}
}

export default loginController