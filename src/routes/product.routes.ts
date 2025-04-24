import { Router } from 'express'
import productController from '../controllers/product.controller'

const productRouter = Router()

productRouter.get('/', productController.getAllProducts)
productRouter.post('/', productController.addProduct)

export default productRouter