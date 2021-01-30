import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

import data from "../data.json"

router.get("/", (req: Request, res: Response, next: NextFunction) =>
  res.json({ data: data })
);

export default router;
