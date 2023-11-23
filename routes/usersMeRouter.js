import { Router } from "express";
import { getMyUserInfo } from "../controllers/getMyUserInfo";

export const usersMeRouter = Router();

usersMeRouter.get('/me', getMyUserInfo);