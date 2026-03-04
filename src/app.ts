import express from "express";
import AdminRouter from "./routes/admin.routes.js";
import UserRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRouter);

export default app;

