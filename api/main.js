import cors from "cors";
import express from "express";
import { data } from "./db.js";

// [ Init ]
const app = express();
app.use(express.json());
app.use(cors());

// this endpoint sends the default data to the frontend
app.get("/", (req, res, next) => {
  res.send(data);
});

export default app;
