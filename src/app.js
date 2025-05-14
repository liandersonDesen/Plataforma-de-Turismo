import express from "express"
import UserRoutes from "./routes/UserRoutes.js";
const app = express();

app.use(express.json())

app.use("/auth", UserRoutes)


export default app
