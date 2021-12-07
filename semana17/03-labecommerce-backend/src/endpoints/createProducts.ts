import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types";

const createProducts = async (req: Request, res: Response) => {
  try {
    const { name, price, image_url } = req.body;

    if (!name || !price || !image_url) {
      throw new Error("Está faltando parâmetros.");
    }

    const products: Product = {
      id: Date.now().toString(),
      name,
      price,
      image_url,
    };

    await connection("labecommerce_products").insert(products);
    res.send({ message: "Product created." });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default createProducts;
