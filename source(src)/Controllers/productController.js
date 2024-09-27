const {registerProduct } = require('../Services/productService')

const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs/promises');


async function createProduct(req, res){

    // console.log(req.file);

    

    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Please attach a product image",
                success: false,
                error: {}
            });
        }
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("Result from cloudinary", result)
        await fs.unlink(req.file.path);

        const response = await registerProduct(req.body, result);

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