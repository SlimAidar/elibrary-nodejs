import {BookController} from "../controller/BookController";

export const bookRoutes = [
    {
        method: 'get',
        route: '/elibrary/book/list',
        controller: BookController,
        action: 'all'
    }
]