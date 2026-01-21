import {Router} from "express";
import users from "../../modules/users/user.controller.js";

const router = Router();

// Example route
router.get("/", users.index);

export default router;