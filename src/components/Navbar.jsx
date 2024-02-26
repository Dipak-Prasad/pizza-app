import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setUser } from '../../redux/slices/authSlice';
import { clearCart } from '../../redux/slices/cartSlice'; // Import clearCart from the cartSlice
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to logout user: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      const data = await logoutUser();
      if (data.success) {
        toast.success(data.message);
        dispatch(logout());
        dispatch(setUser({})); // Clear user data

        // Clear cart data
        dispatch(clearCart());
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 text-slate-800">
      <div className="flex items-center font-bold text-slate-800">
          <img src="/images/logo-2.png" alt="Logo" />
         <Link to="/">Pizato</Link>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex items-center gap-5 mt-4 lg:mt-0">
        
          {isAuth && (
            <>
              <Link to="/orders" className="hover:text-black font-bold">
                My Orders
              </Link>
              <span
                className="hover:text-black font-bold cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>
            </>
          )}
          {!isAuth && (
            <Link to="/login" className="hover:text-black font-bold">
              Login
            </Link>
          )}
          <Link
            to="/cart"
            className="bg-orange-600 rounded-sm p-2 px-4 cursor-pointer hover:rounded transition duration-300 ease-in-out transform hover:translate-x-1"
          >
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

