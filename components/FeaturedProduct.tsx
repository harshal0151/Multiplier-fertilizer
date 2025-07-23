"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
// import cardimg from "../app/img1.png";
import { useCartStore } from "@/store/useCartStore";
import { productData } from "@/constant/product";

// const productData = [
//   {
//     id: 1,
//     // image: cardimg,
//     title: "Kad Multiplier 250gm Pouch",
//     price: 305,
//     originalPrice: 305,
//     image: images.kad250,
//     description: "A 100% organic soil-rejuvenation technology that boosts crop yield,",
//     category: "fertilizer",
//     rating: 4.5,
//     features: ["Organic", "Eco-Friendly"],
//     featured: true,
//   },
//   {
//     id: 2,
//     image: cardimg,
//     title: "Nitrogen Booster",
//     price: 5499,
//     originalPrice: 9999,
//     description: "High-nitrogen mix for faster plant growth and greener.",
//     category: "agrochemicals",
//     rating: 4.8,
//     features: ["Nitrogen Rich", "Fast Growth"],
//     featured: true,
//   },
//   {
//     id: 3,
//     image: cardimg,
//     title: "Phosphate Enhancer",
//     price: 2999,
//     originalPrice: 9999,
//     description: "Promotes strong root development and flowering.",
//     category: "fertilizer",
//     rating: 4.7,
//     features: ["Root Growth", "Flowering"],
//     featured: true,
//   },
// ];

const FeaturedProduct = ({ className }: { className?: string }) => {
  const { addToCart, cart } = useCartStore();
  const featured = productData.filter((item) => item.featured);

  return (
    <>
      <div className="text-center p-4 bg-green-50">
        <h2 className="sm:text-5xl text-4xl p-3  font-semibold w-full text-center">
          Our <span className="text-green-700 font-semibold">Products</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          We&apos;re committed to helping farmers achieve exceptional results
          with our premium fertilizers and comprehensive support services.
        </p>
      </div>
      <section className={`py-8 px-4 bg-green-50 ${className}`}>
        <div className="max-w-7xl mx-auto ">
          <div className="grid gap-8  lg:grid-cols-3 ">
            {featured.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group flex flex-row lg:flex-col justify-between   pb-2"
              >
                <Link
                  href={`/product/${product.id}`}
                  className="w-[40%] lg:w-full relative overflow-hidden"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={500}
                    height={300}
                    className="object-contain w-full h-full sm:h-36 lg:h-52"
                  />
                </Link>

                <div className="p-4 w-[65%] lg:w-full flex flex-col justify-between ">
                  <div className="gap-0.5 flex flex-col">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-[17px] font-semibold text-gray-800 hover:text-green-600 hover: transition-all duration-300">
                        {product.name} <br />
                        {product.subheading}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* {product.features.map((feature, index) => ( */}
                      <span
                        // key={index}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full line-clamp-1"
                      >
                        {product.features[0]}
                      </span>
                      {/* ))} */}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-[18px] font-bold text-green-600 ">
                        ₹ {product.price}
                      </span>
                      <span className="text-xs text-gray-500 line-through ">
                        ₹ {product.originalPrice}
                      </span>
                      <span className="bg-red-100 text-red-800 text-[10px] px-2 py-1 rounded-2xl">
                        Save{" "}
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                      disabled={cart.some((item) => item.id === product.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center transition-colors duration-300 w-full sm:w-auto"
                    >
                      <CiShoppingCart className="mr-2" size={20} />
                      {cart.some((item) => item.id === product.id)
                        ? "Already in Cart"
                        : "Add to Cart"}
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
