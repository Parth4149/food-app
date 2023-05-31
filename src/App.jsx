import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* An <Outlet> should be used in parent route elements to render their child route elements.*/}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
