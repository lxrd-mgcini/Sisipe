import express, { Request, Response } from "express";
import { productRoutes } from "./routes/products.route";
import { connectToDatabase } from "./config/database.config";
import { config } from "./config/app.config";

const app = express();

app.get("", (req: Request, res: Response) => {
  res.send({ msg: "Hello from the server" }).status(200);
});

app.use(express.json());
app.use(productRoutes);

app.listen(8800, () => {
  console.log(`Server running on port ${config.PORT}`);
  connectToDatabase(config.DATABASE_URL);
});
