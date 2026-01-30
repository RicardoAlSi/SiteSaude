import { Router } from "express";
import {registerUser, loginUser} from "../../modules/users/user.controller.js";
import authToken from "../../modules/auth/auth.controllers.js";


const router = Router();


router.post("/registerU", authToken, registerUser)

router.post("/loginU", authToken, loginUser)


export default router;  