import CheckoutForm from '@/components/CheckoutForm';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Checkout = () => {
  return (
    <div>
        <WhatsAppFloat />
  <h2 className="sm:text-5xl text-2xl p-8 lg:mt-10 font-semibold w-full text-center">
          Product <span className="text-green-700 font-semibold">Checkout</span>
        </h2>
     <CheckoutForm />
    </div>
          
  )
  
 
};

export default Checkout