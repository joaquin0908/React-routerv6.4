import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/LayoutRoot";
import Home from "../pages/Home";
import LayoutPrivate from "../layout/LayoutPrivate";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index:  true,
                element: <Home/>,
            },
            {
                path: "/dashboard",
                element: <LayoutPrivate/>,
                children: [
                    {
                        index:true,
                        element: <Dashboard/>,
                    },
                ],
            },

        ],
    },
]);