"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Martinez",
      role: "Corn Farmer",
      location: "Iowa, USA",
      content:
        "AgroFertil's organic blend increased my corn yield by 35% this season. The quality is exceptional and their expert guidance .",
      rating: 5,
      avatar: "photo-1649972904349-6e44c42644a7",
    },
    {
      id: 2,
      name: "Sarah Thompson",
      role: "Vegetable Farm Owner",
      location: "California, USA",
      content:
        "Fast delivery and amazing results! My tomatoes have never looked better. The 24/7 support team helped me choose the perfect fertilizer mix.",
      rating: 5,
      avatar: "photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Organic Farm Cooperative",
      location: "Oregon, USA",
      content:
        "We've been using AgroFertil for 3 years now. Consistent quality, eco-friendly formulations, and our soil health has never been better.",
      rating: 5,
      avatar: "photo-1519389950473-47ba0277781c",
    },
    {
      id: 4,
      name: "Priya Verma",
      role: "Rice Farmer",
      location: "Punjab, India",
      content:
        "Thanks to AgroFertil, my rice yield has doubled. Their eco-friendly approach helps me preserve my land too.",
      rating: 5,
      avatar: "photo-1552058544-f2b08422138a",
    },
    {
      id: 5,
      name: "Carlos Silva",
      role: "Banana Plantation Owner",
      location: "Brazil",
      content:
        "Very satisfied! Our banana crops look greener and more robust than ever before. Highly recommended.",
      rating: 4,
      avatar: "photo-1590080878066-9a84a7f09b0f",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="px-4 py-16 sm:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful farmers who trust AgroFertil for
            their crop nutrition needs. Here’s what they say:
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop
          autoplay={{ delay: 1000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl p-6 m-1 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between relative">
                <div className="absolute top-4 right-4 text-green-100">
                  <Quote size={32} />
                </div>

                <div className="flex items-center mb-5">
                  <Image
                    width={200}
                    height={200}
                    src={`https://images.unsplash.com/${testimonial.avatar}?w=100&h=100&fit=crop`}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-4 object-cover border"
                  />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-green-600 text-xs sm:text-sm font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-4 shadow-md">
            <div className="flex items-center mr-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                  +5K
                </div>
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-sm sm:text-base text-gray-800">
                Join 5,000+ Happy Farmers
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Growing better crops with AgroFertil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
