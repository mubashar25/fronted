import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

import ProductPictures from "../components/ProductPageCom/ProductPictures";
import ProductInformation from "../components/ProductPageCom/ProductInformation";
import DescriptionBox from "../components/ProductPageCom/DescriptionBox";
import RelatedProducts from "../components/ProductPageCom/RelatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ShopContext); // ✅ BACKEND DATA

  // 🔥 FIND PRODUCT USING _id (STRING)
  const product = products.find((item) => item._id === id);

  if (!product) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col gap-6">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <ProductPictures images={product.images} />

        <ProductInformation product={product} />

      </div>

      {/* DESCRIPTION */}
      <DescriptionBox description={product.description} />

      {/* RELATED */}
      <RelatedProducts />

    </div>
  );
};

export default ProductPage;