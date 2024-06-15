import { Router } from "express";
import { router as animalRouter } from "./animal.router.js";
import { router as userRouter } from "./user.router.js";
import { router as authRouter } from "./auth.router.js";
import isLoggedIn from "../middlewares/isLoggedIn.middleware.js";

export const router = Router();

router.use(animalRouter);
router.use(isLoggedIn, userRouter);
router.use(authRouter);
