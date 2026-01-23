import "dotenv";
import express from "express";
import apiRouter from "./api/routes/index.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})