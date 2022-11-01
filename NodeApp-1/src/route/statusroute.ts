import express, { Application, Request, Response } from "express";
import {statuscontroller} from "../controller/statuscontroller";
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   
   let data:string = statuscontroller.application()
    res.send(data);

})

export {
    router
} 