import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3000;
// all the routers
const router = express.Router();
const websiteRouter = express.Router();
const apiRouter = express.Router();
const webappRouter = express.Router();

// connecting public html folder
const fileDir = path.join(__dirname, 'public');
const staticMiddleware = express.static(fileDir);
webappRouter.use(staticMiddleware);

//paths under /greetings
router.get("/", (req, res)=> res.send('greetings homepage'));
router.get("/bye", (req, res)=> res.send('good bye'));

// all routers path declaration
app.use("/greetings", router);
app.use("/dishes", websiteRouter);
app.use("/api", apiRouter);
app.use("/dashboard", webappRouter);

const urlLogger = ((req, res, next)=>{
    console.log('REQUEST URL: ', req.url );
    console.log('after logger');
    
    next();
})

app.use("/coffee",urlLogger);

app.get('/', urlLogger, (req,res)=>{
    res.send("Welcome to the home page");
});

app.post("/coffee", 
    [
        urlLogger,
        (req, res)=>{
            console.log('inside /coffee');
            
            res.send('handle POST /coffee')
        },
    ]
);

app.put("/coffee", (req, res)=>{
    res.send('handle PUT /coffee')
});

app.delete("/coffee", (req, res)=>{
    res.send('handle DELETE /coffee')
});

app.get('/coffee/:brandName', (req, res)=>{
    res.send("handle GET /coffee/:brandName");
});

app.listen(PORT, () =>{
    console.log(`app listening to port ${PORT}`);
});