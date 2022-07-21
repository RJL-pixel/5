import {Header} from "../components/header/Header";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <h2>Content</h2>
 <Outlet/>
        </div>
    );
};

export {MainLayouts}