import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
};

export default Layout;