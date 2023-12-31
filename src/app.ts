import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//IMPORT ROUTES
import { userRoutes } from "./routes/user.routers";
import { productsRoutes } from "./routes/products.routers";

//INITIALIZE
dotenv.config();
const app = express();

//APP USE MODULES
app.use(cors());
app.use(express.json());

//APP USE ROUTES
app.use(userRoutes);
app.use(productsRoutes);

//APP LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);