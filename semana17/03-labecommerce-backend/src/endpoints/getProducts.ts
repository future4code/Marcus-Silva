import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await connection("labecommerce_products");
    res.send(products);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default getProducts;
