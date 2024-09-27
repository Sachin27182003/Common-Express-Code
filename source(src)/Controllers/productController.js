const {registerProduct } = require('../Services/productService')

const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs/promises');


async function createProduct(req, res){

    // console.log(req.file);

    let response;

    try {

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log("Result from cloudinary", result)
            await fs.unlink(req.file.path);

            response = await registerProduct(req.body, result);
        } else {
            
            response = await registerProduct(req.body, "Image not attached");
        }

        return res.status(201).json({
            message: "Product added successfully",
            success: true,
            data: response,
            error: {}

        })

    } catch (error) {
        console.log(error.message);
        return res.json({message: error.message})
    }





}

module.exports = {
    createProduct
}