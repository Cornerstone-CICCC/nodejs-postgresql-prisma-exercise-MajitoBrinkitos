import { Request, Response } from 'express'
import productModel from '../models/product.model'

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

export default {
    getAllProducts
}