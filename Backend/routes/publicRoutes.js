import express from "express";
import { bookCar, getCars } from "../controllers/publicControllers.js";

const router = express.Router();

router.get("/cars", getCars);
router.post("/bookCar", bookCar);

export default router;