import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Book} from "../entity/Book";
import {validate} from "class-validator";

export class BookController {

    private bookRepository = getRepository(Book);

    async all(req: Request, res: Response) {
        req.check
        const books: Book[] = await this.bookRepository.find();
        res.render('books', { books });
    }

    async showBookForm(req: Request, res: Response) {
        res.render('add-book', { csrfToken: req.csrfToken });
    }

    async newBook(req: Request, res: Response) {
        let book: Book = new Book();
        book.title = req.body.title;
        book.isbn = req.body.isbn;
        book.authors = req.body.authors;
        console.log(book)
        const errors = await validate(book);

        if (errors.length > 0) {
            console.log(errors)
            return res.render('add-book', { errors });
        } else {
            await this.bookRepository.save(book);
        }
        res.redirect('/elibrary/book/list');
    }
}