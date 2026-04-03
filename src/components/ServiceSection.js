const services = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image: "https://img.icons8.com/fluency/96/shipped.png",
  },
  {
    id: 2,
    title: "Customize Your Products",
    image: "https://img.icons8.com/fluency/96/settings.png",
  },
  {
    id: 3,
    title: "Fast, reliable shipping",
    image: "https://img.icons8.com/fluency/96/delivery.png",
  },
  {
    id: 4,
    title: "Product monitoring & inspection",
    image: "https://img.icons8.com/fluency/96/inspection.png",
  },
];

const ServiceSection = () => {
  return (
    <div className="max-w-[1180px] mx-auto mt-10 px-4">
      
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Our Extra Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-200 rounded-md p-5 flex flex-col items-center text-center hover:shadow-md transition"
          >
            
            {/* Image */}
            <div className="w-[70px] h-[70px] mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <p className="text-sm font-medium text-gray-700 leading-snug">
              {service.title}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ServiceSection;