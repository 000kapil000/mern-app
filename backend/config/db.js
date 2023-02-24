import mongoose from 'mongoose';

const connectDB=async()=>{
    
 mongoose.set('strictQuery', false)
    try {
        const conn =await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${conn.connection.host}`);
    } catch (error) {
        console.log(`error in mongoose ${error}`);
    }
}
 export default connectDB