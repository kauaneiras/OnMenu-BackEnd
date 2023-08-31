import {Request, Response} from "express";
import {getAllProducts} from "../repositories/products.repository";

async function getAllProductsController(req: Request, res: Response) {
    const products = await getAllProducts();
    return res.status(200).json(products.rows);
}

export {getAllProductsController};