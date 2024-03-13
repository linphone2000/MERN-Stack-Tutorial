import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.post("/books", (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`App is listenting to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
