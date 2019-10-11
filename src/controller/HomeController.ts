import {Request, Response} from "express";

export class HomeController {
    async home(req: Request, res: Response) {
        res.render('index', { title: 'Hey', message: 'Hello there!' })
    }
}