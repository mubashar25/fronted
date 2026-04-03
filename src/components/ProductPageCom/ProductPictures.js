import React, { useState, useEffect } from "react";

const ProductPictures = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  // 🔥 jab product change ho to main image update ho
  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  return (
    <div className="space-y-4">

      {/* MAIN IMAGE */}
      <div className="border border-[#E0E0E0] rounded-md p-4 flex justify-center">
        <img
          src={mainImage}
          alt="product"
          className="w-full max-h-[350px] object-contain"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="thumb"
            onClick={() => setMainImage(img)}
            className={`w-16 h-16 object-cover border rounded-md cursor-pointer ${
              mainImage === img ? "border-blue-500" : "border-gray-200"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ProductPictures;