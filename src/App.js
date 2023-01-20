import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { getProducts } from "./api/api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./Home";
import Cart from "./pages/cart/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={getProducts}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
