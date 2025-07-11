"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/9284117732"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      title="Chat with us on WhatsApp"
    >
      <span className="absolute inline-flex h-15 w-15 animate-ping rounded-full bg-green-400 opacity-75 group-hover:animate-none"></span>

      <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform group-hover:scale-110">
        <FaWhatsapp className="text-2xl" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
