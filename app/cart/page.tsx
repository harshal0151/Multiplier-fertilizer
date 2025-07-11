"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { CiTrash } from "react-icons/ci";
import { useCartStore } from "../../store/useCartStore";

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
  useCartStore();

  const [subTotal, setSubTotal] = useState(0);
  const tax = 2;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotalCalc = cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setSubTotal(subtotalCalc);
    setTotal(subtotalCalc + tax);
  }, [cart]);

  return (
    <div className="p-6 md:p-12">
      <h2 className="sm:text-5xl text-4xl p-8 lg:mt-10 font-semibold w-full text-center">
        Product <span className="text-green-700 font-semibold">Cart</span>
      </h2>{" "}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1">
          {cart.length === 0 ? (
            <div className="w-full h-[50vh] flex flex-col item-center justify-center text-center  text-gray-600">
              <p className="mb-2">Your cart is empty.</p>
              <Link href="/" className="text-green-600 underline">
                Go Shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-5  sm:p-8 p-2 bg-white border border-gray-200 shadow-sm rounded-lg mb-5"
              >
                <div className="flex items-center lg:gap-4 gap-2 sm:min-w-[265px] max-w-[200px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-semibold sm:text-lg text-base  ">{item.title}</h3>
                    <p className="text-gray-500 sm:text-sm text-[12px]">₹ {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <CiTrash size={24} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="w-full lg:w-[300px] p-6 bg-green-100 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">Price Summary</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹ {subTotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>other charges :</span>
                <span>₹ {tax}</span>
              </p>
              <hr />
              <p className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>₹ {total.toFixed(2)}</span>
              </p>
            </div>
            <Link href="/checkout">
              <button className="mt-6 w-full bg-green-600 text-white font-semibold  py-2 rounded-full hover:bg-green-700 transition">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
