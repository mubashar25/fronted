import React from "react";

const DescriptionBox = ({ description }) => {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-md p-6">

      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Product Description
      </h2>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default DescriptionBox;