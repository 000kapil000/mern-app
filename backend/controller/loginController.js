import { comparePassword } from "../helpers/authHelper";
import userModel from "../models/userModel";

const loginController=async(req,res)=>{
try {
    const{email,password}=req.body
    //validation
    if (!email||password){ 
        return res.status(404).send({
        success:false,
        message:"Invalid email or passsword"
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
const token =await JWT.sifn({_id:user._id},process.env.JWT_SECRET)

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