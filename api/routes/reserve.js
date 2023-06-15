import express from "express";
import { createReserve, getReserve } from "../controllers/Reserve.js";

const router = express.Router();

router.post("/", createReserve);

router.get("/:id", getReserve);

export default router;
