import express from "express"
import UserRoutes from "./routes/UserRoutes.js";
import PlaceRoutes from "./routes/PlaceRoutes.js"
const app = express();

app.use(express.json())

app.use("/auth", UserRoutes)
app.use("/places",PlaceRoutes)


export default app
