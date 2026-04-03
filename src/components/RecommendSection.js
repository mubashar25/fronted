import { recommendItems } from "../assets/assets";

const RecommendSection = () => {
  return (
    <div className="max-w-[1180px] mx-auto mt-10 px-4">
      
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Recommended items
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        
        {recommendItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md p-3 bg-white hover:shadow-sm transition"
          >
            
            {/* Image */}
            <div className="w-full h-[140px] flex items-center justify-center mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Price */}
            <p className="text-sm font-semibold text-gray-800 mb-1">
              ${item.price}
            </p>

            {/* Title */}
            <p className="text-xs text-gray-500 leading-tight line-clamp-2">
              {item.name}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default RecommendSection;