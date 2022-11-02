import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { Priorities } from "./priorities.js";

const app = express();
const port = process.env.PORT || 8800;
const router = express.Router();

//Middleware
app.use(cors())
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin", crossOriginResourcePolicy: false, }));
app.use(morgan("common"))
app.use("/api", router)



// Get priorities
router.get("/", (req, res) => {
    try {
        res.status(200).json(Priorities)
    } catch (error) {
        res.status(500).json(error)
    }
})


app.listen(port, () => {
    console.log("backend server is running! " + port)
})