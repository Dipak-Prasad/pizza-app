import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto my-8 p-4 md:p-8 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Our Pizza Ordering App</h1>
      <p className="text-gray-700 leading-relaxed">
        Welcome to our pizza ordering app! We are passionate about delivering the best pizzas
        right to your doorstep. Our app is designed to make your pizza ordering experience
        easy, convenient, and enjoyable.
      </p>

      <div className="mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          - Fresh and high-quality ingredients.
          <br />
          - Extensive menu with a variety of pizza options.
          <br />
          - Fast and reliable delivery service.
          <br />
          - User-friendly app for a seamless ordering experience.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide delicious pizzas with exceptional service. We strive to
          make every pizza order a delightful experience for our customers.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Connect with Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Have any questions, suggestions, or feedback? Feel free to connect with us!
        </p>

        {/* Connect with Us Button */}
        <Link
          to="/contact"  // Replace '/contact' with the actual route for your contact page
          className="bg-orange-600 text-white px-4 py-2 mt-4 rounded-md inline-block hover:bg-orange-700"
        >
          Connect Now
        </Link>
      </div>
    </div>
  );
};

export default About;
