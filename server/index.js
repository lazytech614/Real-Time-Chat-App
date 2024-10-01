import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config();
// const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Hello there!"));

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server running on http://localhost:${PORT}`);
});
