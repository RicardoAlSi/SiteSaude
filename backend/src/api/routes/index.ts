import {Router} from "express";

const router = Router();

// Example route
router.get("/", (req, res) => {
  res.send("API is running");
});

export default router;