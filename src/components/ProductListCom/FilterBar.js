import React, { useState } from "react";

const FilterBar = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [price, setPrice] = useState({ min: "", max: "" });

  const brands = ["Samsung", "Apple", "Huawei", "Xiaomi"];
  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power"];
  const ratings = [5, 4, 3, 2];

  const toggleSelect = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <aside className="w-full lg:w-[260px] bg-white border border-[#E0E0E0] rounded-md p-4 space-y-6">

      {/* CATEGORY */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          Categories
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p className="cursor-pointer hover:text-[#107CFF]">Mobile</p>
          <p className="cursor-pointer hover:text-[#107CFF]">Clothes</p>
          <p className="cursor-pointer hover:text-[#107CFF]">Electronics</p>
          <p className="cursor-pointer hover:text-[#107CFF]">Home items</p>
        </div>
      </div>

      <hr />

      {/* BRANDS */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Brands</h3>
        <div className="space-y-2 text-sm">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleSelect(brand, selectedBrands, setSelectedBrands)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* FEATURES */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Features</h3>
        <div className="space-y-2 text-sm">
          {features.map((feature) => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature)}
                onChange={() => toggleSelect(feature, selectedFeatures, setSelectedFeatures)}
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* PRICE RANGE */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={price.min}
            onChange={(e) => setPrice({ ...price, min: e.target.value })}
            className="w-1/2 border border-gray-300 rounded-md px-2 py-1 text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={price.max}
            onChange={(e) => setPrice({ ...price, max: e.target.value })}
            className="w-1/2 border border-gray-300 rounded-md px-2 py-1 text-sm"
          />
        </div>
      </div>

      <hr />

      {/* CONDITION */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Condition</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="condition" /> New
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="condition" /> Used
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="condition" /> Refurbished
          </label>
        </div>
      </div>

      <hr />

      {/* RATINGS */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Ratings</h3>
        <div className="space-y-2 text-sm">
          {ratings.map((r) => (
            <label key={r} className="flex items-center gap-2">
              <input type="checkbox" />
              <span>{"⭐".repeat(r)}</span>
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* MANUFACTURER */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">
          Manufacturer
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p className="cursor-pointer hover:text-[#107CFF]">Samsung</p>
          <p className="cursor-pointer hover:text-[#107CFF]">Apple</p>
          <p className="cursor-pointer hover:text-[#107CFF]">Sony</p>
        </div>
      </div>

    </aside>
  );
};

export default FilterBar;