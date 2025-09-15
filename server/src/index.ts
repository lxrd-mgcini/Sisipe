import express, { Request, Response } from "express";
import { productRoutes } from "./routes/products.routes";
import { connectToDatabase } from "./config/database.config";
import { config } from "./config/app.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { authRoutes } from "./routes/auth.routes";
// import { usersRoutes } from "./routes/users.routes";

const app = express();

app.get("", (req: Request, res: Response) => {
  res.send({ msg: "Hello from the server" }).status(200);
});

app.use(express.json());
app.use(`${config.BASE_PATH}`, productRoutes);
app.use(`${config.BASE_PATH}`, authRoutes);

app.use(errorHandler);

app.listen(8800, () => {
  console.log(`Server running on port ${config.PORT}`);
  connectToDatabase(config.DATABASE_URL);
});
