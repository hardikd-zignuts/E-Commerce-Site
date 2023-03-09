import React, { useEffect } from "react";
import ProductGallery from "./ProductGallery";
import { Vortex } from "react-loader-spinner";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const loading = useSelector((state) => state.fetch.loading);
  const error = useSelector((state) => state.fetch.error);
  useEffect(() => {
    const notify = () => toast.error(error);
    if (error !== "") {
      notify();
    }
  }, [error]);

  return (
    <>
      <Toaster />
      {error !== "" && (
        <h1 className="text-center mt-4">No Products Available</h1>
      )}
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
