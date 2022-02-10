import { Request, Response } from "express";
import { connection } from "../data/BaseDatabase";
import { generateId } from "../services/IdGenerator";

export async function products(req: Request, res: Response) {
    try {
        const { name, tags } = req.body;

        if (!name || !tags) {
            res.status(422).send("Por favor, insira todas as informações.");
        }

        const id = generateId();
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).send({ message: "Um erro inesperado aconteceu." });
        }
    }
}
