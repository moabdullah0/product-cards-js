import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFavoriteStore from "../app/addToFavorite";
import Drawer from "../components/Drawer";
import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorite = [], removeFromFav } = useFavoriteStore();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const favoriteIcon = <FaHeart className="w-4 h-4 me-2.5" />;

  return (
    <div>
      <div className="text-center">
        <button
          className="favorite-button text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-colors duration-200"
          type="button"
          onClick={toggleDrawer}
        >
          Favorites
          <span className="favorite-counter ml-2 bg-white text-blue-600 rounded-full px-2 py-0.5">
            {favorite.length}
          </span>
        </button>
      </div>

      <Drawer
        isOpen={isOpen}
        onClose={toggleDrawer}
        title={`Your Favorites (${favorite.length} items)`}
        icon={favoriteIcon}
      >
        {favorite.length === 0 ? (
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Your favorites list is empty. Add some products to your favorites!
          </p>
        ) : (
          <div className="space-y-4">
            {favorite.map((item) => (
              <div key={item.id} className="favorite-item flex justify-between items-center border-b pb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.thumbnail || item?.image}
                      alt={item.title || item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h6 className="font-medium">{item.title || item.name}</h6>
                      <p className="text-sm text-gray-500">
                        ${item.price || 0}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromFav(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>
            ))}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => navigate("/products")}
                className="favorite-continue-button w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Favorite;
