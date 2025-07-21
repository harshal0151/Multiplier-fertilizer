import FeaturedProduct from "@/components/FeaturedProduct";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import React from "react";

const page = () => {
  return (
    <>
      <WhatsAppFloat />

      <div className="h-full w-full container mx-auto">
        <FeaturedProduct className=" h-full py-10 " />
      </div>
    </>
  );
};

export default page;
