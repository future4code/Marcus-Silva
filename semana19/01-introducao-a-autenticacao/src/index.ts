import { app } from "./app";
import { Request, Response } from "express";
import { generateId } from "./services/generateId";
import createUser from "./endpoints/createUser";

app.get("/", (req: Request, res: Response) => {
  console.log("hi");
});

const id = generateId();
console.log(id);

app.post("/user/signup", createUser);
