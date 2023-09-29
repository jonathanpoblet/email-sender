import { Router } from "express";
import { controllerGetEmail, controllerPostEmail } from "../controllers/emailController.js";

export const routerEmail = Router();

routerEmail.get('/', controllerGetEmail);
routerEmail.post('/', controllerPostEmail);