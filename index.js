import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import taskRoutes from "./routes/tasks.js";
import { limiter } from "./middlewares/rateLimiter.js";

import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notfound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
import cors from "cors";
import morgan from "morgan";
import { swaggerSpec } from "./utils/swagger.js";

const app = express();
const PORT = process.env.PORT || 3000;

// examples memory Data

app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: ["localhost:4000"],
  }),
);

// app.use(morgan("combined"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV !== "production") {
  console.log("👨‍💻 Development mode – logs and debug enabled");
}

app.use(limiter);

//Routes

// app.use(logger);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//middle Where register
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/tasks", taskRoutes);
// app.use("/posts", potsRoutes);

//Get All Users
app.get("/", (req, res) => {
  res.json(users);
});

// Last route-level middleware
app.use(notFound);

app.use(errorHandler);

// Connect  to mongo db

mongoose
  .connect(
    process.env.NODE_ENV == "development"
      ? process.env.MONGODB_URI_DEV
      : process.env.MONGODB_URI_PRO,
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection err:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
