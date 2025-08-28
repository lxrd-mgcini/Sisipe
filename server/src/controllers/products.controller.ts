import { Request, Response } from "express";

export function getAllProductsController(req: Request, res: Response) {
  //TODO: ADD DATABASE QUERIES
  res.send([
    {
      id: 12,
      name: "Lipstick",
      price: 1234,
    },
    {
      id: 13,
      name: "Moisturiser",
      price: 3400,
    },
  ]);
}
