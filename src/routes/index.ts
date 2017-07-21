import * as express from "express";

export class IndexRoute {
    public index(req: express.Request, res: express.Response, next: express.NextFunction){
        res.send("Hello, World");
    }
}
