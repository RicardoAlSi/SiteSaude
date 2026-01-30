import { Router } from "express";
import authToken from "../../modules/auth/auth.controllers.js";
import { registerPant } from "../../modules/users/atendente.controllers.js"

const router = Router();

router.post("/registerP", authToken, registerPant)

export default router