import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";
import OrderSuccess from "./OrderSuccess";
import { handleWhatsAppCheckout } from "./WhatsAppCheckout";
import useCartStore from "../app/store";

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const { cartItems, getTotalPrice } = useCartStore();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    
    // Prepare shipping info with payment method
    const completeShippingInfo = {
      ...shippingInfo,
      paymentMethod: paymentMethod
    };

    // Send to WhatsApp
    handleWhatsAppCheckout(cartItems, completeShippingInfo, subtotal, tax, total);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-6 px-8">
          <h1 className="text-2xl font-bold text-white">Checkout</h1>
          <div className="flex mt-4 items-center">
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i <= step ? "bg-white text-purple-600" : "bg-purple-400 text-white"
                  } font-semibold`}
                >
                  {i}
                </div>
                {i < 3 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      i < step ? "bg-white" : "bg-purple-400"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="p-8">
          {step === 1 && <OrderSummary cartItems={cartItems} subtotal={subtotal} tax={tax} total={total} />}
          {step === 2 && <ShippingInfo shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} />}
          {step === 3 && <PaymentInfo paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />}
          {step === 4 && <OrderSuccess navigate={navigate} />}

          {step < 4 && (
            <div className="flex justify-between mt-10">
              {step > 1 && (
                <button
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}
              <button
                className={`px-8 py-3 rounded-lg font-medium shadow-md ${
                  isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                }`}
                onClick={handleNextStep}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : step === 3 ? "Complete Payment" : "Continue"}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;


// WhatsApp message generator
const generateWhatsAppMessage = (formData) => {
  // Format items with prices
  const itemsText = cartItems.map(item => 
    `• ${item.name} - $${item.price.toFixed(2)}${item.description ? `\n  ${item.description}` : ''}`
  ).join("\n");

  // Format totals
  const totalsText = `\nSubtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nTotal: $${total.toFixed(2)}`;

  // Format customer details
  const customerDetails = `\n\nCustomer Details:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}, ${formData.city}, ${formData.zipCode}`;

  // Combine all parts
  const message = `New Order Received!\n\nItems:\n${itemsText}${totalsText}${customerDetails}`;

  return encodeURIComponent(message);
};