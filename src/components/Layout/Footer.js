const Footer = () => {
  return (
    <div className="bg-gray-50 mt-10">
      
      {/* TOP SECTION */}
      <div className="max-w-[1180px] mx-auto px-4 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* LEFT SIDE (LOGO + DESC) */}
          <div className="lg:col-span-2">
            
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#37A7E0] text-white px-3 py-2 rounded-md font-semibold">
                Brand
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Best information about the company gies here but now lorem ipsum is
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 text-gray-500 text-lg">
              <span className="cursor-pointer">📘</span>
              <span className="cursor-pointer">▶️</span>
            </div>
          </div>

          {/* COLUMN 1 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">About</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Partnership</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Help Center</li>
              <li>Money refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">For users</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>

          {/* COLUMN 5 (APP BUTTONS) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Get app</h4>

            <div className="flex flex-col gap-3">
              
              {/* App Store */}
              <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md text-xs">
                🍎 Download on the App Store
              </button>

              {/* Play Store */}
              <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md text-xs">
                ▶ Get on Google Play
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1180px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* Left */}
          <p className="text-xs text-gray-500">
            © 2026 Ecommerce.
          </p>

          {/* Right */}
          <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            🌐 English
          </div>

        </div>
      </div>

    </div>
  );
};

export default Footer;