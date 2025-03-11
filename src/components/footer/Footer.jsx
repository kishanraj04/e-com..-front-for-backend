import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10 z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm text-gray-400">
              Your go-to store for premium products. We offer the best deals with fast delivery.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/help-center" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/shipping-info" className="hover:text-white">Shipping Info</Link></li>
              <li><Link to="/track-order" className="hover:text-white">Track Order</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link to="/offers" className="hover:text-white">Offers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gray-300 text-2xl">📘</Link>
              <Link to="#" className="hover:text-gray-300 text-2xl">🐦</Link>
              <Link to="#" className="hover:text-gray-300 text-2xl">📷</Link>
              <Link to="#" className="hover:text-gray-300 text-2xl">🎥</Link>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
