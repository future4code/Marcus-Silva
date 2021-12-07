import { Request, Response } from "express";
import { connection } from "../connection";
import { Product, Purchase, User } from "../types";

const createPurchases = async (req: Request, res: Response) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    const [user]: User[] = await connection("labecommerce_products")
      .select()
      .where({
        id: user_id,
      });

    if (!user) {
      throw new Error("Usuário não encontrado(user_id)");
    }

    const [product]: Product[] = await connection("labecommerce_products")
      .select()
      .where({
        id: product_id,
      });

    if (!product) {
      throw new Error("Produto não encontrado(product_id)");
    }

    const total_price = product.price * quantity;

    const purchase: Purchase = {
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price,
    };

    await connection("labecommerce_purchases").insert(purchase);
    res.status(200).send({ message: "Successful purchase" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default createPurchases;
