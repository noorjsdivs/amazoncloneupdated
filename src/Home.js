import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Products from "./components/home/Products";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="-mt-32 z-10">
        <Products products={products.data} />
      </div>
    </div>
  );
};

export default Home;
