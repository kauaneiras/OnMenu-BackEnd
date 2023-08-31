import { Router } from "express";
import { getAllProductsController } from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.get("/products", getAllProductsController);

export { productsRoutes };