import {userRoutes} from "./routes/userRoutes"
import {homeRoutes} from "./routes/homeRoutes";
import {bookRoutes} from "./routes/bookRoutes";

export const Routes = [
    ...homeRoutes,
    ...userRoutes,
    ...bookRoutes
];