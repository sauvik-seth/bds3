import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* NGO Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Baishamyadurikaran Smiti</h3>
            <p className="text-gray-400">123 NGO Street, Charity City, 12345</p>
            <p className="text-gray-400">Contact: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Stories</a></li>
              <li><a href="#" className="hover:text-gray-300">Activities</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form>
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white" />
              <button type="submit" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Baishamyadurikaran Smiti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;