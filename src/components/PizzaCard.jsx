// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { addToCart } from '../../redux/slices/cartSlice';
// import ".././pages/data.json"

// const PizzaCard = ({ pizza }) => {
//   const { name, size, price } = pizza;
//   const dispatch = useDispatch();
//   // const isAuth = useSelector((state) => state.auth.isAuth);

//   // const shoot = () => {
//   //   if (isAuth) {
//   //     dispatch(addToCart(pizza));
//   //     toast.success('Item added to cart!');
//   //   } else {
//   //     toast.info('Please login to add items to your cart.', {
//   //       onClose: () => {
//   //         // Redirect to the login page or show a login modal
//   //         // based on your application's routing strategy
//   //         console.log('Redirecting to login page...');
//   //       },
//   //     });
//   //   }
//   // };

//   return (
//     <div className="div1 margin">
//       <img
//         src={pizza.image}
//         alt={name}
//         width="230px"
//         className="img"
//       />
//       <h1 className="font-medium paddd">{name}</h1>
//       <h1 className="paddd mt-2 text-uppercase">{size}</h1>
//       <div className="flex mt-5">
//         <h1 className="font-bold padee">₹{price}</h1>
//         <button
//           className="padee2 font-medium text-orange-600 border-2 rounded-full border-solid border-orange-600 h-12 w-28 flex items-center justify-center hoverji"
//           onClick={shoot}
//         >
//           Buy Now
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PizzaCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PizzaCard = ({ pizza }) => {
  const { name, size, price } = pizza;
  const navigate = useNavigate();

  const shoot = () => {
    // Redirect to the Contact page
    navigate("/contact");
  };

  return (
    <div className="div1 margin">
      <img
        src={pizza.image}
        alt={name}
        width="230px"
        className="img"
      />
      <h1 className="font-medium paddd">{name}</h1>
      <h1 className="paddd mt-2 text-uppercase">{size}</h1>
      <div className="flex mt-5">
        <h1 className="font-bold padee">₹{price}</h1>
        <button
          className="padee2 font-medium text-orange-600 border-2 rounded-full border-solid border-orange-600 h-12 w-28 flex items-center justify-center hoverji"
          onClick={shoot}
        >
          Buy Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PizzaCard;
