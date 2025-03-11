const generateWhatsAppMessage = (cartItems, shippingInfo, subtotal, tax, total) => {
  const itemsText = cartItems.map((item) => 
    `• ${item.title} - $${item.price.toFixed(2)} x ${item.quantity || 1}`
  ).join("\n");

  const totalsText = `\nSubtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nTotal: $${total.toFixed(2)}`;

  const customerDetails = `\n\nCustomer Details:
Name: ${shippingInfo.firstName} ${shippingInfo.lastName}
Email: ${shippingInfo.email}
Phone: ${shippingInfo.phone}
Address: ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.zipCode}
Payment Method: ${shippingInfo.paymentMethod}`;

  // Combine all parts
  const message = `New Order Received!\n\nItems:\n${itemsText}${totalsText}${customerDetails}`;

  return encodeURIComponent(message);
};

export const handleWhatsAppCheckout = (cartItems, shippingInfo, subtotal, tax, total) => {
  const phoneNumber = "+352681538889";
  const message = generateWhatsAppMessage(cartItems, shippingInfo, subtotal, tax, total);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  
  window.location.href = whatsappUrl;
};