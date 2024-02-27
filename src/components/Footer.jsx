import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer text-center bg-white text-gray-700 p-8">
        <hr/>
      <h1 className="text-lg font-bold mb-3 mt-2">All Right Reserved &copy; Webwonderz</h1>
      {/* <p>
        <Link to="/about" className="text-gray-700 hover:text-black font-bold mr-4">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-black font-bold mr-4">
          Contact
        </Link>
        <Link to="/privacy-policy" className="text-gray-700 hover:text-black font-bold">
          Privacy Policy
        </Link>
      </p> */}
    </div>
  );
};

export default Footer;




