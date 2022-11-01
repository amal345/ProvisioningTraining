import express, { Application, Request, Response } from "express";
import {router} from "./route/statusroute"
const app: Application = express();
app.use('/',router)


app.listen(5000, () => {
    console.log('Server listening on port');
});
