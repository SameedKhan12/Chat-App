import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";
import connetToMongoDB from "./db/connetToMngoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9080;

app.use(express.json());
app.use(cookieParser())
app.listen(PORT, () => {
  connetToMongoDB();
  console.log(`server is running on the port ${PORT}`);
});

app.use("/api/message", messageRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
