"use client"

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Mail, Phone, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 ">
      <div className="container mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={20} />
              </div>
              <Link href="/">
                <h1 className="text-2xl font-extrabold text-green-700 tracking-wide cursor-pointer">
                  AGRO<span className="text-lime-600">Farm</span>
                </h1>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of premium agricultural fertilizers, helping
              farmers achieve exceptional crop yields for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://wa.me/919999999999" // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FaWhatsapp className="text-xl text-green-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  About Us
                </a>
              </li>

             
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Kad Multiplier 250gm Pouch to 10KG Box
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                 Narayanastra Bottle 100ml
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-gray-400"> Subhash Nagar, Lane No.1,Old Dhule</p>
                  <p className="text-gray-400">Dhule - 424001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400 flex-shrink-0" size={20} />
                <p className="text-gray-400">+91 8208784767</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400 flex-shrink-0" size={20} />
                <p className="text-gray-400">shubhamgawali.dhule@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Evolve Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
