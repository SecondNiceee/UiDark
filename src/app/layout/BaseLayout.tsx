import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header/Header";
import cl from "./_BaseLayout.module.scss"

const BaseLayout = () => {
    return (
        <div className={cl.layout}>
            <Header />
            <Outlet />
            <p>футер</p>
        </div>
    );
};

export default BaseLayout;