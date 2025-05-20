import express from "express";
import { LoginUser, RegisterUser } from "../controllers/UserControllers.js";
import { validate } from "../middleware/validate.js";
import { LoginUserSchema, RegisterUserSchema } from "../schemas/UserSchemas.js";

const router = express.Router()

router.post('/register',validate(RegisterUserSchema),RegisterUser)
router.post('/login', validate(LoginUserSchema),LoginUser)


export default router