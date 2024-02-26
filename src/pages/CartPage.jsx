import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      {cart.length === 0 ? (
        <>
          <h1 className="text-4xl font-bold text-black mb-2">
            Cart Empty 😞
          </h1>
          <h6 className="text-gray-400 text-center mb-4">
            {isAuthenticated ? (
              <>You haven't ordered a pizza yet.</>
            ) : (
              <>
                You probably haven't ordered a pizza yet.
                <br />
                To order a pizza, go to the main page.
              </>
            )}
          </h6>
          {isAuthenticated && (
            <div>
              {/* Display user data here, for example: */}
              <p>Welcome, {user.name}!</p>
              <p>Email: {user.email}</p>
            </div>
          )}
          <img src="/images/empty-cart.png" alt="Empty Cart" className="mb-4" width="450px" />
          <Link to="/">
            <button className="bg-orange-600 hover:bg-orange-800 text-white px-4 py-2 rounded">
              Go Back
            </button>
          </Link>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.size} - ₹{item.price}
              </li>
            ))}
          </ul>
          <Link to="/">
            <button className="bg-orange-600 hover:bg-orange-800 text-white px-4 py-2 rounded mt-4">
              Continue Shopping
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
