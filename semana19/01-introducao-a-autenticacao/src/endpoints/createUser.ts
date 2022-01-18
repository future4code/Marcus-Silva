import { Request, Response } from "express";
import { connection } from "../data/connection";
import { generateId } from "../services/generateId";
import { User } from "../types";

export default async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Está faltando parâmetros.");
    }

    const [User] = await connection("Users").where({ email });

    if (User) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado.");
    }

    const id: string = generateId();

    const newUser: User = { id, email, password };

    await connection("Users").insert(newUser);

    res.status(201).send({ newUser });
  } catch (error: any) {
    if (res.statusCode === 200) {
      console.error(error);
      res.status(500).send({ error: "Internal server error" });
    } else {
      res.send({ message: error.sqlMessage || error.message });
    }
  }
}
