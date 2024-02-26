import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center max-w-md p-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-lg md:text-xl mb-8">
          Oops! It seems like the page you are looking for does not exist.
        </p>
        <img
          src="/images/404_pizza.png" // Add your own custom 404 image
          alt="Page Not Found"
          className="max-w-full mx-auto mb-4"
        />
        <p className="text-lg md:text-xl mt-4">
          Don't worry, our pizzas are still here for you!{' '}
          <span role="img" aria-label="Pizza Emoji">
            🍕
          </span>
        </p>
        <Link to="/" className="text-lg md:text-xl text-orange-600 hover:underline mt-4 inline-block">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
