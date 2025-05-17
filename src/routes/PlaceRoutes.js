import express from "express";
import { CreatePlace, DeletePlace, GetPlaces, UpdatePlace } from "../controllers/PlaceController.js";

const router=express.Router()

router.post("/",CreatePlace)
router.get("/",GetPlaces)
router.put("/:id",UpdatePlace)
router.delete("/:id",DeletePlace)

export default router