import express, { Request, Response } from "express";
import { config } from "./config/app.config";

const app = express();

app.get("/api/v1", (req: Request, res: Response) => {
  res.send({ msg: "Hello from the server" }).status(200);
});

app.use(express.json());
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
