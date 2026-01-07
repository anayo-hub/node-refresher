import express from "express";
import path from "path";

// function createWebsiteRouter({ parentDir }) {
//     const router = express.Router();
//     const fileDir = path.join(parentDir, "public");

//     router.use(express.static(fileDir));

//     return router;
// }

// export default createWebsiteRouter;

function createWebsiteRouter(options){
    const {parentDir} = options;

    const router = express.Router();
    const fileDir = path.join(parentDir, "dishes", "public");

    router.use(express.static(fileDir));

    return router
}

export default createWebsiteRouter;