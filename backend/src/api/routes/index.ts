import { Router } from "express";
import users from "../../modules/users/user.controller.js";

const router = Router();


router.post("/registerU", users.registerUser)

router.post("/registerP", users.registerPant )

router.get("/loginU", users.loginUser)


export default router;  