import express from "express";
import { CreatePlace, DeletePlace, GetPlaces, UpdatePlace } from "../controllers/PlaceController.js";
import { validate } from "../middleware/validate.js";
import { CreatePlaceSchema, UpdatePlaceSchema } from "../schemas/PlaceSchemas.js";
import { authhenticateToken, authorization } from "../utils/auth.js";

const router=express.Router()

router.post("/",authhenticateToken(),authorization(['ADMIN']),validate(CreatePlaceSchema),CreatePlace)
router.get("/",authhenticateToken(),authorization(['ADMIN','USER']),GetPlaces)
router.put("/:id",authhenticateToken(),authorization(['ADMIN']),validate(UpdatePlaceSchema),UpdatePlace)
router.delete("/:id",authhenticateToken(),authorization(['ADMIN']),DeletePlace)

export default router