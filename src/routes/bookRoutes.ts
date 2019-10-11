import {BookController} from "../controller/BookController";

export const bookRoutes = [
    {
        method: 'get',
        route: '/elibrary/book/list',
        controller: BookController,
        action: 'all'
    }, {
        method: 'get',
        route: '/elibrary/book/add',
        controller: BookController,
        action: 'showBookForm'
    }, {
        method: 'post',
        route: '/elibrary/book/add',
        controller: BookController,
        action: 'newBook'
    }
];