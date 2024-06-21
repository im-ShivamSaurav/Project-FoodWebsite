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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const OnlineValue = useOnlineStatus();

  return (
    <Provider store={appStore}>
    {OnlineValue === false ? (
    <div>
      <Header />
      <Offline />
    </div>
  ) : (
    <div>
      
      <div className="max-w-[1920px] mr-auto ml-auto">
        <Outlet />
      </div>

      
    </div>
  )}
  </Provider>
)
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: [<Header />,<Body />,<Footer />]
      },
      {
        path: "/home",
        element:[<Header />,<Body />,<Footer />],
      },
      {
        path: "/about",
        element: [<Header />,<About />,<Footer />],
      },
      {
        path: "/contact",
        element: [<Header />,<Contact />,<Footer />],
      },
      {
        path: "/cart",
        element:[<Header />,<Cart />] ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurants",
        element: [<Header />,<Body />,<Footer />],
      },
      {
        path: "/restaurants/:resid",
        element: [<Header/>,<ResMenu />],
      },
    ],
  },
]);

root.render(<RouterProvider router={AppRouter} />);
