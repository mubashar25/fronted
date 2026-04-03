const countries = [
  { id: 1, name: "United States", shop: "shopname.pk", flag: "https://flagcdn.com/us.svg" },
  { id: 2, name: "United Kingdom", shop: "shopname.pk", flag: "https://flagcdn.com/gb.svg" },
  { id: 3, name: "Germany", shop: "shopname.pk", flag: "https://flagcdn.com/de.svg" },
  { id: 4, name: "France", shop: "shopname.pk", flag: "https://flagcdn.com/fr.svg" },
  { id: 5, name: "Italy", shop: "shopname.pk", flag: "https://flagcdn.com/it.svg" },
  { id: 6, name: "China", shop: "shopname.pk", flag: "https://flagcdn.com/cn.svg" },
  { id: 7, name: "Pakistan", shop: "shopname.pk", flag: "https://flagcdn.com/pk.svg" },
  { id: 8, name: "UAE", shop: "shopname.pk", flag: "https://flagcdn.com/ae.svg" },
  { id: 9, name: "India", shop: "shopname.pk", flag: "https://flagcdn.com/in.svg" },
  { id: 10, name: "Turkey", shop: "shopname.pk", flag: "https://flagcdn.com/tr.svg" },
];

const CountrySection = () => {
  return (
    <div className="max-w-[1180px] mx-auto mt-10 px-4">
      
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Suppliers by region
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4">
        
        {countries.map((country) => (
          <div key={country.id} className="flex items-center gap-3">
            
            {/* Flag */}
            <img
              src={country.flag}
              alt={country.name}
              className="w-[28px] h-[20px] object-cover rounded-sm"
            />

            {/* Text */}
            <div>
              <p className="text-sm font-medium text-gray-800">
                {country.name}
              </p>
              <p className="text-xs text-gray-500">
                {country.shop}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CountrySection;