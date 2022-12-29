const Product = require("../models/product")

// function for creating a product
module.exports.createProduct = async (req, res) => {
    try {
        // first create a product
        let product = await Product.create(req.body);   // data comes in req.body

        // if the product is created
        if(product){
            return res.status(200).json({
                data: {
                    product: product
                }
            });
        }
        return res.status(500).json({
            message: 'Internal server error'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}


// function for listing all the products
module.exports.allProducts = async (req, res) => {
    try {
        // fetching all the products from the db
        let allProducts = await Product.find({});
        return res.status(200).json({
            data: {
                products: allProducts
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}


// function for deleting the product
module.exports.deleteProduct = async (req, res) => {
    try {
        // first find the product with the help of id which passed in req.params
        let product = await Product.findByIdAndDelete(req.params.id);
        // if product is found
        if(product){
            return res.status(200).json({
                data: {
                    message: 'product deleted'
                }
            });
        }
        // if product is not found 
        return res.status(404).json({
            data: {
                message: 'product not found'
            }
        });

    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}


// function for updating the product quantity
module.exports.updateProduct = async (req, res) => {
    try {
        // first find the product which will be updated 
        let product = await Product.findById(req.params.id);  //  id is passed on from req.params
        // if product is found
        if(product){
            product.quantity = req.query.number;    // change the quantity of product which comes from req.query
            await product.save();  // save the changes to db
            return res.status(200).json({
                data: {
                    product: product
                },
                message: 'updated successfully'
            });
        }
        // if product is not found
        return res.status(404).json({
            message: 'product not found'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}