import mongoose from "mongoose";

const connectDB = async ()=>{
    try{

        const res = mongoose.connect(process.env.MONGO_URI);
        console.log(res.connection.host);        
    } 
    catch(error){
        console.error("MONGO DB NOT CONNECTED: "+error);
        process.exit(1);
    }
}

export default connectDB;
 