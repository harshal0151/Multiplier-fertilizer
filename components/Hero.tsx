"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {  Leaf } from "lucide-react";


import BannerTwo from "../components/assets/sliders/Slide Image (1).jpg";
import BannerThree from "../components/assets/sliders/Slide Image (2).jpg";
import BannerFour from "../components/assets/sliders/Slide Image (3).jpg";

const images = [ BannerTwo, BannerThree, BannerFour];

const BannerCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative  w-full h-[25vh] sm:h-[70vh] lg:h-[80vh]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover"  }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="min-h-[60vh] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-6 px-4 sm:px-6 lg:px-10 overflow-hidden flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center items-center mb-4">
            <Leaf className="text-green-600 mr-2" size={28} />
            <span className="text-green-600 font-semibold text-base sm:text-lg">
              Premium Quality
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Grow Your <span className="text-green-600"> Success</span>
            <br className=" sm:block" />
             with Premium Fertilizers
          </h1>

          {/* Description */}
          <p className="text-sm  sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Boost your crop yields with our scientifically formulated
            fertilizers. Trusted by farmers worldwide for over 20 years of
            agricultural excellence.
          </p>

          {/* Stats */}
          <div
            className="flex flex-row text-[12px] sm:flex-row justify-center items-center gap-12 
  bg-white backdrop-blur-md rounded-xl shadow-md p-6 border border-white/80"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 sm:text-3xl">500+</div>
              <div className="text-gray-600">Happy Farmers</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 sm:text-3xl">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 sm:text-3xl">50+</div>
              <div className="text-gray-600">Product Range</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerCarousel;
