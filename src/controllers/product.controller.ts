import { Request, Response } from 'express';
import { Product } from '@prisma/client';
import productModel from '../models/product.model';

//Get all products
const getAllProducts = async(req: Request, res: Response) => {
    try {
        const products = await productModel.fetchAllProducts()
        res.status(200).json(products)       
    } catch (err){
        console.error(err)
        res.status(500).json({ message: 'Server error'})
    }
}

//Add new product
const addProduct = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
    try {
        const { productName, price } = req.body
        const product = await productModel.createProduct({
            productName,
            price
        })
        res.status(201).json(product)
    } catch(err){
        console.error(err)
        res.status(500).json({ message: 'Unable to add product'})
    }
}

export default {
    getAllProducts,
    addProduct
}