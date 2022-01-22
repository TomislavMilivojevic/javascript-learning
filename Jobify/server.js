import cors from "cors";
import express from "express";
const app = express();
// Error handler
import "express-async-errors";
// DB and authenticate user
import connectDB from "./db/connect.js";

// Routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRouter.js";
// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";

// DB and authenticator
dotenv.config();

app.use(cors());

// make JSON data available inside the controllers since we will have post requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});
// From routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

// Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

// Start server if DB connection is successful

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
