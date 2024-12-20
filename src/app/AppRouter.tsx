import {Route, Routes} from "react-router-dom"
import BaseLayout from "./layout/BaseLayout";
import { Home } from "../pages/Home";
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element = {<BaseLayout/>}>
                <Route index element = {<Home/>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;