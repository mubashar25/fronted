import React from "react";
import { relatedProducts } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#E0E0E0] rounded-md p-4">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Related Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

        {relatedProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="text-center cursor-pointer hover:shadow-sm p-2 rounded-md"
          >

            <img
              src={item.image}
              alt="product"
              className="w-full h-[120px] object-contain mb-2"
            />

            <p className="text-sm text-gray-700">{item.title}</p>
            <p className="text-sm font-semibold">${item.price}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RelatedProducts;