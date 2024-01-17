require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

console.log("Cloudinary Config:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

//* Cloudinary Upload Image


const cloudinaryUploadImage = async (fileToUpload) => {
    try {
      const data = await cloudinary.uploader.upload(fileToUpload, {
        resource_type: 'auto',
      });
      return data;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error; // Re-throw the error to propagate it to the calling function
    }
  };


//* Cloudinary Remove Image

const cloudinaryRemoveImage = async(imagePublicId) =>{
    try {
         const result = await cloudinary.v2.uploader.destroy(imagePublicId)
         return result
    } catch (error) {
        return error
    }
}


module.exports = {
    cloudinaryUploadImage ,
    cloudinaryRemoveImage
}