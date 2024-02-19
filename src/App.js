import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Login from "./components/Login";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offline from "./components/Offline";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const OnlineValue = useOnlineStatus();
  return OnlineValue === false ? (
    <div>
      <Header />
      <Offline />
    </div>
  ) : (
    <div>
      <Header />
      <div className="max-w-[1920px] mr-auto ml-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurants",
        element: <Body />,
      },
      {
        path: "/restaurants/:resid",
        element: <ResMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={AppRouter} />);
