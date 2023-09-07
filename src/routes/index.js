import { useRoutes, Outlet } from 'react-router-dom';
import Login from '../pages/LoginPage/LoginPage.jsx';
import WrapperRouteComponent from "./config";
import Logout from '../pages/LoginPage/Logout.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';
import DefaultLayout from '../components/DefaultComponent/DefaultLayout.jsx';
import CreateNew from '../pages/AnimalManagerPage/CreateNew.jsx';
import { UpdateSpecies } from '../api/auth/auth.api.js';

const routeList = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/",
        element: <WrapperRouteComponent element={<Outlet />} guest />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "/auth",
        element: <WrapperRouteComponent element={<Outlet />} auth />,
        children: [
          {
            path: "",
            element: <MainPage />,
          },
          {
            path: "logout",
            element: <Logout />,
          },
          {
            path: "create",
            element: <CreateNew />,
          },
          {
            path:"update",
            element: <UpdateSpecies />,
          },
        ],
      },
    ],
  },
];

const RenderRouter = () => {
    const element = useRoutes(routeList);
  
    return element;
  };
  
  export default RenderRouter;