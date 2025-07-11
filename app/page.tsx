import Faqs from "@/components/Faqs";
import FeaturedProduct from "@/components/FeaturedProduct";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloat from "@/components/WhatsAppFloat";


export default function Home() {
  return (
    <main className=" overflow-hidden">
      <WhatsAppFloat />
      <Hero />
      <div className="container mx-auto">
       
        <FeaturedProduct />
        <Features/>
        <Faqs/>
        <Testimonials/>
      </div>
    </main>
  );
}
