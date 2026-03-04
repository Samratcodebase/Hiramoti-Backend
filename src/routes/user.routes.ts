import express, { Express } from "express";

const RouterV1 = express.Router();



RouterV1.get("/menu", UserController.GetMenu)