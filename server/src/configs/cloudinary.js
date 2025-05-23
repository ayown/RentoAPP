import {v22 as cloudinary} from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) =>{
   try {
     if(!localFilePath) return null;
 
     //if file exist or not
     if(!fs.existsSync(localFilePath)){
         console.error("File Not Found: ",localFilePath);
         return null;
     }
 
     const response = await cloudinary.uploader.upload(localFilePath,{
         resource_type:"auto"
     })
 
     fs.unlinkSync(localFilePath);
   } catch (error) {
    if(fs.existsSync(localFilePath)){
        fs.unlinkSync(localFilePath);
    }

    return null;
   }
}


export default uploadOnCloudinary;