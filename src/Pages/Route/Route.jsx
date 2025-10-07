import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import Apps from "../Apps/Apps";


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            loader:() => fetch('./app.json'),
            Component: Home,
        },
        {
          path: '/apps',
          Component: Apps   
        },
        {
            path: '*',
            Component: ErrorPage
        }
    ]
  },
]);

export default router;