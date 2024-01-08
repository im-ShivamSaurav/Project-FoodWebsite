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
import Hero from "./components/Hero";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
  <div className="main">
    <Header />
    {/* <Hero/>  */}
    <Outlet/>
    <Footer />
  </div>
);

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement:  <Error/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/home",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/restaurants",
        element:<Body/>
      },
      {
        path: "/restaurants/:resid",
        element: <ResMenu/>
      }
    ],
    
  }
])

root.render(<RouterProvider router={AppRouter} />);
