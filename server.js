import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import createWebsiteRouter from "./public/router.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// routers
const websiteRouter = createWebsiteRouter({ parentDir: __dirname });
const apiRouter = express.Router();
const webappRouter = express.Router();

// website router


// greetings
app.use("/dishes", websiteRouter);
app.use("/", webappRouter);
app.use("/api", apiRouter);



app.get("/", (req, res) => {
    res.send("Welcome to the home page");
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
