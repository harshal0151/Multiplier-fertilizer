export interface CheckoutFormData {
    // Personal Information
    name: string;
    email: string;
    phone: string;
    
    // Billing Address
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    
    // Shipping Address (optional)
    shippingSameAsBilling: boolean;
    shippingAddress: string;
    shippingCity: string;
    shippingState: string;
    shippingPostalCode: string;
    shippingCountry: string;
  }