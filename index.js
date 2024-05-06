import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import { db, main } from "./database/connection.js";

config();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

main()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server open and connected to db! and PORT:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
