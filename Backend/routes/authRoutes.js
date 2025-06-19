import express from "express";
import { isLoggedIn, login, logout } from "../controllers/authControllers.js";
import isAuth from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/login", login);
router.get("/isLoggedIn", isAuth, isLoggedIn);
router.post("/logout", isAuth, logout);


export default router;