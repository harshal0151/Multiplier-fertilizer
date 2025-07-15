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
import { CheckCircle } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import images from "@/components/assets/productsImgs/ProductImgs"

// Dummy Product Data
const productData = [
  {
    id: "1",
    name: "Kad Multiplier 250gm Pouch",
    price: 305,
    originalPrice: 305,
    shortDescription:
      "A 100% organic soil-rejuvenation technology that boosts crop yield, improves soil fertility, and reduces the need for chemical fertilizers.",
    description:
      "Multiplier is a modern organic technology that initiates a natural system through which crops receive free nutrition by restoring soil fertility. It also transforms poor and barren land into cultivable farmland by increasing the population of beneficial microbes and earthworms in the soil. Multiplier technology boosts crop production by up to 50% in the first year, and with continued use, yields can increase up to threefold within seven years. This technique eliminates crop malnutrition, protects plants from diseases and pests, and enhances both the quantity and quality of leaves, flowers, and fruits. By increasing the oxygen content in the soil, Multiplier reduces the presence of harmful viruses and ensures the return of earthworms providing farmers with free earthworm compost worth ₹4 to ₹10 lakhs every year. As a result of this technology, the dependence on chemical fertilisers and pesticides gradually diminishes, making pure, natural, and zero-budget farming a practical reality. Multiplier is neither a fertilizer nor a pesticide — it is the only modern soil-rejuvenation technology that empowers every farmer to become self-reliant.",
    brand: "Kad",
    category: "Organic Fertilizer",
    rating: 4.9,
    reviewCount: 324,
    images: [images.kad250 , images.Kad250b],
    featured: true,
    weight: "250 gm",
    features: [
      "100% organic product suitable for all types of crops.",
      "Increase in crop production up to 50% in the first year.",
      "Crop production increases 3 times in seven years.",
      "Savings up to 80% in cultivation costs.",
      "Improves soil structure and fertility.",
      "Boosts flowering, fruiting, and yield.",
    ],
    specifications: {
      "Product Name": "Kad Multiplier 250gm Pouch",
      "Type of fertilizer": "Organic",
      "Suitable For": "All types of crops",
      Form: "Powder",
      Colour: "Black",
      Odor: "May Vary",
      Solubility: "Water soluble",
      Contains: "Potassium humate 100% (W/W)",
      "Organic Matter %": "100% Organic",
      Certifications: [
        "NPOP India",
        "Apeda",
        "Vimta",
        "IFOAM",
        "Biocert International",
      ],
      "Country of Origin": "Made In India",
    },
    benefits: [
      {
        title: "Revives Stagnant Crop Growth",
        description:
          "Multiplier technology reactivates stalled crop growth. When applied during the flowering stage, it significantly increases flower production and reduces flower drop.",
      },
      {
        title: "Strengthens and Sustains Fruit Setting",
        description:
          "The flower-to-fruit conversion process becomes quicker and more effective. Existing fruits are retained better, ensuring consistent and reliable yields.",
      },
      {
        title: "Enhances Leaf Colour and Size",
        description:
          "Leaves become lush, deep green, and more vibrant. New leaves grow larger, boosting the plant’s photosynthetic efficiency and overall vitality.",
      },
      {
        title: "Promotes Holistic Crop Development",
        description:
          "Multiplier encourages the growth of more branches, each capable of bearing fruit. This results in a substantial increase in total crop yield.",
      },
      {
        title: "Provides Natural Protection Against Pests and Diseases",
        description:
          "Crops develop enhanced resistance to pests and diseases, significantly reducing the need for chemical pesticide applications.",
      },
      {
        title: "Quickly Resolves Leaf Nutrient Deficiencies",
        description:
          "Multiplier effectively addresses issues such as yellow mosaic in okra or leaf-edge reddening, commonly caused by nutrient deficiencies.",
      },
      {
        title: "Improves the Size, Weight, and Colour of Produce",
        description:
          "Fruits and vegetables grow larger, heavier, and display more vibrant, appealing colours leading to better market value and higher returns per crate.",
      },
      {
        title: "Elevates Taste and Nutritional Quality",
        description:
          "Multiplier-treated produce not only looks better but also tastes superior, with improved flavour and nutrition boosting consumer preference.",
      },
      {
        title: "Increases Crop Resilience in Harsh Conditions",
        description:
          "Even during drought or extreme weather, crops remain green and healthy. Multiplier strengthens the crop’s natural connection with the environment.",
      },
      {
        title: "Fertilises Soil and Promotes Self-Reliant Farming",
        description:
          "Multiplier brings deep-buried earthworms (2–3 meters) to the surface, enhancing soil fertility. Within 5–7 years, farmers can naturally generate up to 120 tonnes of vermicompost annually.",
      },
    ],
    usage: [
      {
        title: "Application Method",
        description:
          "Flood/Running water, Drip irrigation, Foliar/Pump Spray, Broadcasting or Mixing with Cow dung or Granular fertilizers",
      },
      {
        title: "Seed Treatment",
        description: "10–20g per 1kg of seed",
      },
      {
        title: "Soil Treatment",
        description: "1kg per acre before ploughing",
      },
      {
        title: "Drip Irrigation",
        description:
          "250–500g in 200L water, 1–2 times/week through drip or running water",
      },
      {
        title: "Foliar Spray",
        description: "1g per 1L water",
      },
      {
        title: "Frequency of Use",
        description: "1–2kg per acre every month",
      },
      {
        title: "Compatibility",
        description: "Can be used with pesticides or other fertilizers",
      },
    ],
    storage: {
      shelfLife: "3 years from the date of manufacture",
      instructions: [
        "Keep in a cool, dry place, away from direct sunlight.",
        "It is not harmful to the environment, animals, plants or human beings, but consult a doctor if infected.",
        "Keep away from children.",
        "Results may vary due to changes in environment or method of use.",
      ],
    },
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

      {/* Back Button */}
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
        {/* Product Images */}
        <div>
          <div className="rounded-2xl flex justify-center overflow-hidden shadow-lg bg-white">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              width={600}
              height={600}
              className="w-[50%] object-cover"
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
            {product.shortDescription}
          </p>

          {/* Quantity Selector */}
          <div className="mb-6 flex items-center">
            <label className="text-gray-700 font-medium mr-5">Quantity:</label>
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

          {/* Cart + WhatsApp Buttons */}
          <div className="flex gap-3 mt-4">
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
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-green-500">
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

      {/* Tabs Section */}
      <div className="bg-white rounded-lg shadow-sm my-12 ">
        <div className="border-b border-gray-200">
          <div className="flex space-x-3 overflow-scroll px-4 sm:px-6 hide-scrollbar">
            {[
              { id: "description", label: "Description" },
              { id: "specifications", label: "Specifications" },
              { id: "benefits", label: "Benefits" },
              { id: "Usage & Application", label: "Usage & Application" },
              { id: "storage", label: "storage" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
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
          {activeTab === "description" && (
            <>
              <h3 className="text-lg font-semibold mb-3">
                Product Description
              </h3>
              {product.description
                .split(". ")
                .filter((line) => line.trim() !== "")
                .map((sentence, idx) => (
                  <p key={idx} className="text-gray-600 mb-2">
                    {sentence.trim() + (sentence.endsWith(".") ? "" : ".")}
                  </p>
                ))}

              <h4 className="text-base font-semibold mt-6 mb-2">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="pt-1">
                      <CheckCircle className="text-green-500 w-5 h-5 min-w-[20px] mr-3" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {activeTab === "specifications" && (
            <>
              <h3 className="text-lg font-semibold mb-3">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 text-gray-700 gap-1"
                  >
                    <span className="font-medium text-gray-800">{key}</span>
                    <span className="text-gray-600 sm:text-right">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "benefits" && (
            <>
              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="pt-1">
                      <CheckCircle className="text-green-500 w-5 h-5 min-w-[20px]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeTab === "Usage & Application" && (
            <>
              <h3 className="text-lg font-semibold mb-3">
                Usage & Application
              </h3>
              <ul className="space-y-4">
                {product.usage.map((usages, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="pt-1">
                      <CheckCircle className="text-green-500 w-5 h-5 min-w-[20px]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {usages.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {usages.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeTab === "storage" && (
            <>
              <h3 className="text-lg font-semibold mb-3">
                Shelf Life & Storage Instructions
              </h3>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800">Shelf Life</h4>
                <p className="text-gray-600 text-sm">
                  {product.storage.shelfLife}
                </p>
              </div>
              <ul className="space-y-4">
                {product.storage.instructions.map((instruction, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="pt-1">
                      <CheckCircle className="text-green-500 w-5 h-5 min-w-[20px]" />
                    </div>
                    <p className="text-gray-600 text-sm">{instruction}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
