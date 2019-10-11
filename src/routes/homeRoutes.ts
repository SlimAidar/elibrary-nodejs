import {HomeController} from "../controller/HomeController";

export const homeRoutes = [
    {
        method: 'get',
        route: ['/', '/elibrary/home'],
        controller: HomeController,
        action: 'home'
    }
]