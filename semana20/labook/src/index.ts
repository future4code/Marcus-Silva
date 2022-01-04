import { app } from "./controllers/app";

app.get("/", (req, res) => {
  res.send("hello");
});
