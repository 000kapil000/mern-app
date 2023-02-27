export const testController=(req,res)=>{
    console.log("protected controller");
    res.send("protected route")
}