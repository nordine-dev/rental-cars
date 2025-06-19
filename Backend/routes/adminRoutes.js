import express from "express";
import { addCar, getBookings, getCars } from "../controllers/adminControllers.js";
import isAuth from "../middlewares/isAuth.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/addCar", isAuth, upload.single("image_file"), addCar);
router.get("/cars", isAuth, getCars);
router.get("/bookings", isAuth, getBookings);

export default router;
