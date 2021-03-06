import * as express from "express";
import * as indexRoute from "./routes/index"

class ExpressServer {
    private app: express.Application;
    private port: number;

    constructor(port: number){
        this.app = express();
        this.port = port;
    }

    setupRoutes(){
        let router = express.Router();

        router.get("/", new indexRoute.IndexRoute().index);

        this.app.use(router);
    }

    run(){
        this.setupRoutes();
        this.app.listen(this.port)
    }
}

let server: ExpressServer = new ExpressServer(8080);
server.run();