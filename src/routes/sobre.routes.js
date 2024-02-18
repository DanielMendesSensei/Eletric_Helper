import { Router } from "express";
import { sobreController } from "../controllers/sobre.controller.js";
const sobreRoutes = Router();

sobreRoutes.get('/sobre', sobreController.sobre)

export { sobreRoutes }