import React, { useState } from "react";
import useCartStore from "../app/store";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import { BsInfoCircle } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const DrawerProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppCheckout = () => {
    const itemsText = cartItems
      .map(
        (item) =>
          `• ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`
      )
      .join("\n");

    const total = getTotalPrice();
    const message = `I want to purchase:\n${itemsText}\n\nTotal: $${total.toFixed(
      2
    )}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=352681538889?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  const cartIcon = <BsInfoCircle className="w-4 h-4 me-2.5" />;

  return (
    <div>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          Cart{" "}
          <span className="ml-1 bg-white text-blue-700 rounded-full px-2 py-0.5">
            {cartItems.length}
          </span>
        </button>
      </div>

      <Drawer
        isOpen={isOpen}
        onClose={toggleDrawer}
        title={`Your Cart (${cartItems.length} items)`}
        icon={cartIcon}
      >
        {cartItems.length === 0 ? (
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Your cart is empty. Add some products to get started!
          </p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
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
                        ${item.price || 0} x {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 py-1 bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-500"
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-4 pt-2 border-t">
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Regular Checkout
                </button>
               
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default DrawerProduct;