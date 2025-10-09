import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import AppsWithTitle from "../AppsWithTitle/AppsWithTitle";
import AppDetails from "../AppDetails/AppDetails";
import AppList from "../AppList/AppList";


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            loader:() => fetch('../app.json'),
            Component: Home,
        },
        {
          path: '/apps',
          Component: Apps   
        },
        
        {
          path:  '/appsWithTitle',
           loader:() => fetch('../app.json'),
          Component: AppsWithTitle
        },
        {
          path:'/appDetails/:id',
          loader:() => fetch('../../app.json'),
          Component:AppDetails
        },
        {
         path:'/appList',
         Component: AppList
        },
        {
            path: '*',
            Component: ErrorPage
        }
    ]
  },
]);

export default router;