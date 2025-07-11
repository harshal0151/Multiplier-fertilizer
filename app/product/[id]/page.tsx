"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  Plus,
  Minus,
  Truck,
  Shield,
  Award,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCartStore } from "@/store/useCartStore";
import cardimg from "@/app/img1.png";

// Temporary dummy product list
const productData = [
  {
    id: "1",
    name: "Organic Fertilizer",
    price: 7999,
    originalPrice: 9999,
    description: "Natural fertilizer to boost soil health and crop yield.",
    brand: "AgroFertil Premium",
    category: "Fertilizer",
    rating: 4.8,
    reviewCount: 324,
    images: [cardimg, cardimg, cardimg, cardimg],
    featured: true,
    weight: "25 kg",
    coverage: "Up to 1000 sq ft",
    applicationRate: "2-4 lbs per 1000 sq ft",
    features: [
      "All-in-one NPK formula",
      "Quick absorption technology",
      "Long-lasting nutrition",
      "Suitable for all crops",
      "Organic certified ingredients",
      "Weather resistant",
    ],
    specifications: {
      "Nitrogen (N)": "20%",
      "Phosphorus (P2O5)": "20%",
      "Potassium (K2O)": "20%",
      "pH Level": "6.5-7.0",
      "Granule Size": "2-4mm",
      "Moisture Content": "< 2%",
    },
    benefits: [
      "Increases crop yield by up to 35%",
      "Improves soil structure and health",
      "Enhances plant disease resistance",
      "Promotes stronger root development",
      "Accelerates plant growth cycles",
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const product = productData.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCartStore();
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-gray-600">
        Product not found.
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.min(10, Math.max(1, prev + delta)));
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));

  return (
    <div className="min-h-screen bg-gray-50 px-4 lg:px-20 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <Link href="/">Home</Link> / <Link href="/#products">Products</Link> /{" "}
        {product.name}
      </div>

      {/* Back */}
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center text-green-600 hover:text-green-700"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="rounded-2xl flex justify-center overflow-hidden shadow-lg bg-white">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              width={600}
              height={600}
              className="w-[50%]  object-cover "
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`rounded-lg overflow-hidden border-2 aspect-square ${
                  selectedImage === i ? "border-green-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded-full">
              {product.category}
            </span>
            <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2 mb-2">
            {renderStars(product.rating)}
            <span className="text-gray-600 text-sm">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-green-600">
              ₹ {product.price}
            </span>
            <span className="text-xl text-gray-500 line-through">
              ₹ {product.originalPrice}
            </span>
            <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
              Save{" "}
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              %
            </span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="mb-6 flex items-center">
            <label className="text-gray-700 font-medium mr-5 ">Quantity:</label>
            <div className="inline-flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            {(console.log(quantity, "quantity"), null)}
            <button
              onClick={() =>
                addToCart({
                  id: Number(product.id),
                  image: product.images[0],
                  title: product.name,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  featured: false,
                  quantity: quantity,
                })
              }
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-green-700"
            >
              <ShoppingCart size={20} className="mr-2" /> Add to Cart
            </button>
            <button className="p-3 border  border-gray-300 rounded-lg hover:bg-green-500 ">
              <FaWhatsapp size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
            <div className="flex flex-col items-center">
              <Truck className="text-green-600 mb-2" size={24} />
              <span className="text-gray-600">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-green-600 mb-2" size={24} />
              <span className="text-gray-600">Secure Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="text-green-600 mb-2" size={24} />
              <span className="text-gray-600">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
      {/* Product Details Tabs */}
      <div className="bg-white rounded-lg shadow-sm my-12">
        <div className="border-b border-gray-200">
          <div className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-start sm:space-x-8 px-4 sm:px-6">
            {[
              { id: "description", label: "Description" },
              { id: "specifications", label: "Specifications" },
              { id: "benefits", label: "Benefits" },
              // { id: "reviews", label: "Reviews" }, removed
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 text-sm sm:text-base">
          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed ">
                  {product.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our NPK Complete Fertilizer is scientifically formulated to
                  provide balanced nutrition for all types of crops...
                </p>
              </div>

              <div>
                <h4 className="text-base pt-6  sm:text-lg font-semibold mb-2">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-100 text-gray-700"
                  >
                    <span>{key}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Benefits & Results
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reviews Tab (if used in future) */}
          {activeTab === "reviews" && (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Customer Reviews
              </h3>
              <div className="text-center py-10 text-gray-500">
                <Star size={48} className="mx-auto mb-3 text-gray-300" />
                <p>Reviews section coming soon!</p>
                <p className="text-xs">Be the first to review this product.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
