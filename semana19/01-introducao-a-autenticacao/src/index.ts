import { app } from "./app";
import { Request, Response } from "express";
import { generateId } from "./services/generateId";

app.get("/", (req: Request, res: Response) => {
  console.log("hi");
});

const id = generateId();
console.log(id);
