import LoginPage from "../pages/Auth/Login/Login.component";
import HomePage from "../pages/Home/Home.component";
import NotFoundPage from "../pages/NotFound/NotFound.component";
import ProtectedGrandRouter from "./Protected.component";
import { IRoute } from "./interfaces/common.interface";

export const rootRouter: Array<IRoute> = [
    { path: '/login', component: LoginPage, protected: ProtectedGrandRouter },
    { path: '/404', component: NotFoundPage },
    { path: '/', component: HomePage },
];