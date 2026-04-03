const Newsletter = () => {
  return (
    <div className="w-full bg-gray-100 py-12 mt-10">
      
      <div className="max-w-[600px] mx-auto text-center px-4">
        
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          Subscribe our newsletter
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-6">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          
          {/* Input with icon */}
          <div className="flex items-center w-full sm:w-auto border border-gray-300 bg-white rounded-md px-3 py-2">
            
            {/* Icon */}
            <span className="text-gray-400 mr-2 text-sm">📧</span>

            {/* Input */}
            <input
              type="email"
              placeholder="Email"
              className="outline-none text-sm w-full"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#37A7E0] text-white text-sm px-5 py-2 rounded-md hover:opacity-90 transition"
          >
            Subscribe
          </button>

        </form>

      </div>
    </div>
  );
};

export default Newsletter;