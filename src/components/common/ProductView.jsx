import React from "react";
import { useParams } from "react-router-dom";
import DummyData from "../../constant/DummyData";
const ProductView = () => {
  const { productId } = useParams();
  const thisProduct = DummyData.products.find((prod) => prod.id.toString() === productId);
  
  return (
    <>
      <div>Product {thisProduct.title}</div>
      <img src={thisProduct.thumbnail} alt="" />
    </>
  );
};

export default ProductView;
