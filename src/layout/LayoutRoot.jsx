import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => { 
    return(
        <>
        <NavBar/>
        <Outlet/>
        <p>footer</p>
        </>
    ); 
 };

export default Layout;