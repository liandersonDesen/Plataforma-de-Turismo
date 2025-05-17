import express from "express";
import { CreatePlace, DeletePlace, GetPlaces, UpdatePlace } from "../controllers/PlaceController.js";
import { validate } from "../middleware/validate.js";
import { CreatePlaceSchema, UpdatePlaceSchema } from "../schemas/PlaceSchemas.js";

const router=express.Router()

router.post("/",validate(CreatePlaceSchema),CreatePlace)
router.get("/",GetPlaces)
router.put("/:id",validate(UpdatePlaceSchema),UpdatePlace)
router.delete("/:id",DeletePlace)

export default router