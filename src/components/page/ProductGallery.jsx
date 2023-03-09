// import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
// import { useDispatch,useSelector } from "react-redux";
import DummyData from "../../constant/DummyData";
// import { fetchProduct } from "../../redux/actions/fetchActions";
import ProductDetail from "../common/ProductDetail";

const ProductGallery = () => {
  // const dispatch = useDispatch();
  // const productData = useSelector((state) => state.fetch.productData);
  // useEffect(() => {
  //   dispatch(fetchProduct());
  // }, [dispatch]);

  return (
    <>
      <Row>
        {DummyData.products.map((item) => {
          return <ProductDetail key={`p${item.id}`} {...item} />;
        })}
      </Row>
      {/* <Row>
        {productData.products &&
          productData.products.map((item) => {
            return <ProductDetail key={`p${item.id}`} {...item} />;
          })}
      </Row> */}
    </>
  );
};

export default ProductGallery;
