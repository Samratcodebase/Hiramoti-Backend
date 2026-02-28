import "dotenv/config";
import express from "express";
import type { Application } from "express";
import ConnectDb from "./Db/db.js";

const app: Application = express();
ConnectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1");

export default app;
