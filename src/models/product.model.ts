import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient()
type Product = Prisma.Product;

//Fetch all products
const fetchAllProducts = async () => {
   return await prisma.product.findMany()
}

//Create new product
const createProduct = async (data: Omit<Product, 'id'>) => {
    return await prisma.product.create({
        data
    })
}

export default {
    fetchAllProducts,
    createProduct
}