import React, { useState, useEffect, useRef } from "react";
import PizzaCard from "../components/PizzaCard";
import pizzaData from './data.json'; // Import the JSON file

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const allPizzasRef = useRef(null);

  useEffect(() => {
    // Use the imported data instead of fetching from the backend
    setPizzas(pizzaData);
  }, []);

  const scrollToAllPizzas = () => {
    if (allPizzasRef.current) {
      allPizzasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-gray-100 center flex flex-col md:flex-row">
        <div className="pade md:w-1/2">
          <i className="text-lg md:text-xl text-gray-700 mb-2">Are you hungry?</i>
          <h1 className="font-bold text-5xl font-medium btn text-gray-800">Don't Wait !</h1>
          <button
            className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:shadow-outline-orange mt-8 mb-8"
            onClick={scrollToAllPizzas}
          >
            Order Now
          </button>
        </div>
        <div className="mar md:w-1/2">
          <img
            src="/images/hero-pizza.png"
            alt="pizza"
            className="w-full h-auto md:max-w-xl"
          />
        </div>
      </div>
      <div className="min-h-screen" ref={allPizzasRef}>
        <h1 className="font-bold text-2xl font-bold text-slate-800 pt mt-2">
          All Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

