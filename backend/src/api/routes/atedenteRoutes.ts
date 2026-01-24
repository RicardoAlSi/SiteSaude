import { Router } from "express";
import registerPant from "../../modules/users/atendente.controllers.js";
import authToken from "../../modules/auth/auth.controllers.js";

const router = Router();

router.post("/registerP", authToken, registerPant)

export default router