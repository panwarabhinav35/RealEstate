import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const app = express();

const PORT = 3000
mongoose
  .connect(process.env.MONGO, {
    dbName: "RealEstate",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
