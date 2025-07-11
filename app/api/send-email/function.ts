import { CartItem } from "@/app/type/Product";
import { CheckoutFormData } from "@/constant/types";

export function MailMessage(values: CheckoutFormData, cart: CartItem[]) {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode,
      district,
      shippingSameAsBilling,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingPostalCode,
      shippingCountry,
    } = values;
    console.log(cart,'cart')
  
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #4CAF50;">🧾 Order Confirmation</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for your order. Here are your submitted details:</p>
  
        <h3>📌 Personal Information</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
  
        <h3>🏠 Billing Address</h3>
        <ul>
          <li><strong>Address:</strong> ${address}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>State:</strong> ${state}</li>
          <li><strong>Postal Code:</strong> ${postalCode}</li>
          <li><strong>District:</strong> ${district}</li>
        </ul>
  
        <h3>📦 Shipping Address</h3>
        ${
          shippingSameAsBilling
            ? "<p>Same as billing address</p>"
            : `
          <ul>
            <li><strong>Address:</strong> ${shippingAddress}</li>
            <li><strong>City:</strong> ${shippingCity}</li>
            <li><strong>State:</strong> ${shippingState}</li>
            <li><strong>Postal Code:</strong> ${shippingPostalCode}</li>
            <li><strong>Country:</strong> ${shippingCountry}</li>
          </ul>
        `
        }
  
        <h3>🛒 Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th align="left">Product</th>
              <th align="right">Qty</th>
              <th align="right">Price</th>
            </tr>
          </thead>
          <tbody>
            ${cart
              .map(
                (item) => `
              <tr>
                <td>${item.title}</td>
                <td align="right">${item.quantity}</td>
                <td align="right">₹${item.price * item.quantity}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
        <p><strong>Total:</strong> ₹${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
  
        <p style="margin-top: 30px;">If you have any questions, feel free to reply to this email.</p>
        <p style="color: #888;">— The Team</p>
      </div>
    `;
  
    return htmlMessage;
  }
  