import express from "express";
import type { Application } from "express";


const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1");

export default app;
