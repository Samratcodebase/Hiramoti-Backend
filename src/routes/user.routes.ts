import express, { Express } from "express";
import UserController from "../controllers/user.controller.js";
const RouterV1 = express.Router();

RouterV1.get("/menu", UserController.getMenu);

export default RouterV1;
