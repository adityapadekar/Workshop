require("dotenv").config();

const express = require("express");
require("express-async-errors");

const { connectDB } = require("./config/db.config");

const app = express();

app.use(express.json());

const router = require("./routes/index");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use("/", router);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB(process.env.DB_URL);

    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
