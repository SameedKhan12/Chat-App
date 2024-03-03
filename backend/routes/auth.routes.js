import express from "express";
import { loginUser, logoutUser, sginupUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/login',loginUser);

router.post('/signup',sginupUser);

router.post('/logout',logoutUser);

export default router;