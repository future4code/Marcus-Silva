import { app } from "./app";
import { connection } from "./data/connection";

app.get("/", async function (req, res) {
  res.send(await connection.raw("show tables"));
});

// app.post("/signup", SignUp);
