import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Book} from "../entity/Book";

export class BookController {

    private bookRepository = getRepository(Book);

    async all(req: Request, res: Response) {
        const books: Book[] = await this.bookRepository.find();
        res.render('books', { books });
    }
}