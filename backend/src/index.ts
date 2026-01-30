import "dotenv";
import express from "express";
import cookieParse from "cookie-parser"
import apiRouter from "./api/routes/index.js"
import routerAtedent from "./api/routes/atedenteRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse())

app.use("/api", apiRouter);
app.use("/api/atend", routerAtedent)

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})