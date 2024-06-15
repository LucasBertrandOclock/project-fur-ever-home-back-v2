import { Router } from "express";
import animalController from "../controllers/animal.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";
import { isEmployee } from "../middlewares/login.middleware.js";

export const router = Router();

router.get("/animals", cw(animalController.getAll));
router.get("/animals/:id", cw(animalController.getById));
router.post("/animals", isEmployee, cw(animalController.insert));
router.patch("/animals/:id", isEmployee, cw(animalController.update));
