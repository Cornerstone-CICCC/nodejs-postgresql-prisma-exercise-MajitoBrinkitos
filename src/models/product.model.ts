import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient()

// Fetch all products
const fetchAllProducts = async () => {
    const products = await prisma.product.findMany()
    return products
}

export default {
    fetchAllProducts
}