import { hashPassword}  from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"

const registerController=async(req,res)=>{
try {
    const {name,email,password,phone,address}=req.body;
    
    //validation
  if (!name) {
    returnres.send({error:"Name is required"})
  }
  if (!email) {
    returnres.send({error:"Email is required"})
  }
  if (!password) {
    returnres.send({error:"Password is required"})
  }
  if (!phone) {
    returnres.send({error:"phone is required"})
  }
  if (!address) {
    returnres.send({error:"address is required"})
  }
 
//check user
  const existinguser=await userModel.findOne({email})
  //existing user check

  if (existinguser) {
    return res.status(200).send({
        success:true,
        message:"alrady register please login",
    })
  }
  //register user
const hashedPassword=await hashPassword(password)
//save
const user=await new userModel({name,email,phone,address,password:hashedPassword}).save()

res.status(201).send({
  success:true,
  message:'user Register successfully',
  user
})

} catch (error) {
    res.status(500).send({
        success:false,
        message:"Error in registration",
        error,
    })
    
    console.log(error);
}
}


export default registerController