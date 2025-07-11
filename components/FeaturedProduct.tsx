"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import cardimg from "../app/img1.png";
import { useCartStore } from "@/store/useCartStore";

const productData = [
  {
    id: 1,
    image: cardimg,
    title: "Organic Fertilizer",
    price: 7999,
    originalPrice: 9999,
    description: "Natural fertilizer to boost soil health and crop yield.",
    category: "fertilizer",
    rating: 4.5,
    features: ["Organic", "Eco-Friendly", "High Yield"],
    featured: true,
  },
  {
    id: 2,
    image: cardimg,
    title: "Nitrogen Booster",
    price: 5499,
    originalPrice: 9999,
    description: "High-nitrogen mix for faster plant growth and greener.",
    category: "agrochemicals",
    rating: 4.8,
    features: ["Nitrogen Rich", "Fast Growth"],
    featured: true,
  },
  {
    id: 3,
    image: cardimg,
    title: "Phosphate Enhancer",
    price: 2999,
    originalPrice: 9999,
    description: "Promotes strong root development and flowering.",
    category: "fertilizer",
    rating: 4.7,
    features: ["Root Growth", "Flowering"],
    featured: true,
  },
];

const FeaturedProduct = ({ className }: { className?: string }) => {
  const { addToCart,cart } = useCartStore();
  const featured = productData.filter((item) => item.featured);

  return (
    <>
      <div className="text-center p-4">
        <h2 className="sm:text-5xl text-4xl p-3  font-semibold w-full text-center">
          Our <span className="text-green-700 font-semibold">Products</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          We&apos;re committed to helping farmers achieve exceptional results
          with our premium fertilizers and comprehensive support services.
        </p>
      </div>
      <section className={`py-16 px-4 bg-green-50 ${className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8  lg:grid-cols-3">
            {featured.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group flex   lg:flex-col"
              >
                <Link
                  href={`/product/${product.id}`}
                  className="sm:w-1/2 lg:w-full relative overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={300}
                    className="object-contain w-full h-full sm:h-44 lg:h-52"
                  />
                  {/* <div className="absolute top-5 right-5 bg-white px-3 py-1 text-sm rounded-full shadow flex items-center">
                  <Star
                    className="text-yellow-500 fill-current mr-1"
                    size={14}
                  />
                  {product.rating}
                </div> */}
                </Link>

                <div className="p-4 sm:w-1/2 lg:w-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-auto">
                    {/* Price & Discount */}
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-green-600">
                        ₹ {product.price}
                      </span>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-2xl">
                        Save{" "}
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                  
                    <button
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                      disabled={cart.some((item) => item.id === product.id) ?true:false}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center transition-colors duration-300 w-full sm:w-auto"
                    >
                      <CiShoppingCart className="mr-2" size={20} />
                      {cart.some((item) => item.id === product.id) ? "Already in Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
