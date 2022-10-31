const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose
  .connect(
    "mongodb+srv://jorgedasilva:Melun1972@cluster0.nhde3.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
