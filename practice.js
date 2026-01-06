// import express from 'express';
// import dotenv from 'dotenv';
// // import arr from './arrays.js';

// dotenv.config();

// const app = express();

// // middleware
// app.use(express.json());

// // routes
// app.get('/', (req, res) => {
//   res.json({ status: 'ok', message: 'Express server running' });
// });

// app.get('/health', (req, res) => {
//   res.json({ uptime: process.uptime(), timestamp: Date.now() });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Not Found' });
// });

// // error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// // console.log(arr);

// // start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server listening on http://localhost:${PORT}`);
// });

// export default app;


/*
 second app starts from that talks about how middleware is used and created
*/

// import express from "express";
// import dotenv from 'dotenv';

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// const app = express();

// const urlLogger = ((req, res, next)=>{
//     console.log('REQUEST URL: ', req.url );
//     console.log('after logger');
    
//     next();
// })

// app.use("/coffee",urlLogger);

// app.get('/', urlLogger, (req,res)=>{
//     res.send("Welcome to the home page");
// });

// app.post("/coffee", 
//     [
//         urlLogger,
//         (req, res)=>{
//             console.log('inside /coffee');
            
//             res.send('handle POST /coffee')
//         },
//     ]
// );

// app.put("/coffee", (req, res)=>{
//     res.send('handle PUT /coffee')
// });

// app.delete("/coffee", (req, res)=>{
//     res.send('handle DELETE /coffee')
// });

// app.get('/coffee/:brandName', (req, res)=>{
//     res.send("handle GET /coffee/:brandName");
// });


// app.listen(PORT, () =>{
//     console.log(`app listening to port ${PORT}`);
// });

function createLogger(level) {
  return function logger(req, res, next) {
    console.log(level, req.url);
    next();
  };
};
console.log(typeof createLogger('debug'));