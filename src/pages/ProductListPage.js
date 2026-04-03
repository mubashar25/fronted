import { useState } from "react";
import Topbar from "../components/ProductListCom/Topbar";
import FilterBar from "../components/ProductListCom/FilterBar";
import ProductGrid from "../components/ProductListCom/ProductGrid";
import { useParams } from "react-router-dom";

const ProductListPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { category } = useParams();

  return (
    <div className="max-w-[1180px] mx-auto px-4 mt-6">

      {/* MOBILE FILTER DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ${
          showFilter ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Filters</h3>
          <button onClick={() => setShowFilter(false)}>✕</button>
        </div>

        <div className="p-4 overflow-y-auto h-full">
          <FilterBar />
        </div>
      </div>

      {/* OVERLAY */}
      {showFilter && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setShowFilter(false)}
        />
      )}

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* DESKTOP FILTER */}
        <div className="hidden lg:block lg:col-span-1">
          <FilterBar />
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          
          {/* TOPBAR */}
          <Topbar onFilterClick={() => setShowFilter(true)} />

          {/* PRODUCTS */}
          <ProductGrid category={category} />

        </div>

      </div>

    </div>
  );
};

export default ProductListPage;