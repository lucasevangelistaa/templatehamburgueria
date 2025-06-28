import { useState } from "react";
import { motion as Motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/menu";

const Home = ({ burgerMenu, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredBurgers =
  activeCategory === "Todos"
    ? burgerMenu
    : burgerMenu.filter((burger) => burger.category === activeCategory);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
        Cardápio
      </h1>

      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap ${
              activeCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <Motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredBurgers.map((burger) => (
          <ProductCard key={burger.id} burger={burger} addToCart={addToCart} />
        ))}
      </Motion.div>
    </div>
  );
};

export default Home;
