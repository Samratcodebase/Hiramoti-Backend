import express, { Express } from "express";
import AdminController from "../controllers/admin.controller.js";
const AdminRouter = express.Router();

AdminRouter.post("/item", AdminController.AddItem);

export default AdminRouter;
