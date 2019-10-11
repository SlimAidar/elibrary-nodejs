import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {NextFunction, Request, Response} from "express";
import {Routes} from "./routes";
import * as mustacheExpress  from "mustache-express";
import * as cookieParser from "cookie-parser";
import * as csrf from "csurf";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here



    // Register '.mustache' extension with The Mustache Express
    app.engine('html', mustacheExpress());
    app.use(cookieParser());
    // setup route middlewares
    const csrfProtection = csrf({ cookie: true });
    const parseForm = bodyParser.urlencoded({ extended: true });



    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');


    //MiddleWares
    app.use('/elibrary/book/add',parseForm, csrfProtection, (req: Request, res: Response, next: NextFunction) => {
        req.csrf = csrfProtection;
        next();
    });


    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
