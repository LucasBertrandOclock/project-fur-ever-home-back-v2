import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";
import { isAdmin } from "../middlewares/login.middleware.js";

export const router = Router();

router.get("/users", isAdmin, cw(userController.getAll));
router.get("/users/:id", cw(userController.getByEmail));
router.post("/users/patch", cw(userController.update));
router.post("/user/delete", isAdmin, cw(userController.softDelete));
