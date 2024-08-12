import { v2 as cloudinary } from "cloudinary"
import streamifier from "streamifier"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


const uploadImageToCloudinary = (imgInBuffer) => {
    return new Promise((resolve, reject) => {
        const cloudUploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: "image",
                folder: "studentimages"
            },
            function (error, result) {
                if (result) {
                    resolve(result)
                }
                if (error) {
                    reject(error)
                }
            }
        )
        streamifier.createReadStream(imgInBuffer).pipe(cloudUploadStream)
    })
}

export { uploadImageToCloudinary }