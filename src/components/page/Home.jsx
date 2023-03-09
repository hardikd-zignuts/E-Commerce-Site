import React from "react";
import ProductGallery from "./ProductGallery";
import { Vortex } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Home = () => {
  const loading = useSelector((state) => state.fetch.loading);
  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center mt-5">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      )}
      <ProductGallery />
    </>
  );
};

export default Home;
