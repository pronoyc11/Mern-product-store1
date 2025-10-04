import express from "express";
import Product from "../models/products.model.js";
import mongoose from "mongoose";
import  { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/product.controller.js";


export const router = express.Router();

router.get("/", getProduct);

router.put("/:id",updateProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

export default router ;