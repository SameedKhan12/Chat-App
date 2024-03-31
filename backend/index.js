import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";
import connetToMongoDB from "./db/connetToMngoDB.js";
import { app, server } from "./socket/socket.js";
import path from 'path';
dotenv.config();


const PORT = process.env.PORT || 9060;

const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser())

server.listen(PORT, () => {
  connetToMongoDB();
  console.log(`server is running on the port ${PORT}`);
});

app.use("/api/message", messageRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use(express.static(path.join(__dirname, "frontend", "dist")));



app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})
