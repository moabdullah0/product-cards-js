import React, { useState } from "react";
import useCartStore from "../app/store";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppCheckout = () => {
    const itemsText = cartItems.map(item => 
      `• ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`
    ).join("\n");

    const total = getTotalPrice();
    const message = `I want to purchase:\n${itemsText}\n\nTotal: $${total.toFixed(2)}`;
    
    // Use the correct WhatsApp API URL format
    const whatsappUrl = `https://api.whatsapp.com/send?phone=963982567173&text=${encodeURIComponent(message)}`;
    
    // Open in the same tab to ensure message appears
    window.location.href = whatsappUrl;
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          Cart{" "}
          <span className="ml-1 bg-white text-blue-700 rounded-full px-2 py-0.5">
            {cartItems.length}
          </span>
        </button>
      </div>

      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Your Cart ({cartItems.length} items)
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

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
                      src={item.thumbnail||item?.image}
                      alt={item.title||item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h6 className="font-medium">{item.title ||item.name}</h6>
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
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
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
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Regular Checkout
                </button>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  WhatsApp Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
