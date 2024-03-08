import { Router } from "express";
import { homeController } from "../controllers/eletricData.controller.js";
const homeRoutes = Router();

homeRoutes.post('/calcular', homeController.calcular)
homeRoutes.get('/calculo', homeController.obter)
homeRoutes.get('/', homeController.home)

export { homeRoutes }