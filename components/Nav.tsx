"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BiDownArrowAlt } from "react-icons/bi";

const Nav = () => {
  const { cart } = useCartStore();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Use capture phase to close menu *before* other click events fire
    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-green-700 font-semibold" : "text-gray-700";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="fixed top-0 w-full z-50">
      {/* Top Strip */}
      <div className="text-end p-1 bg-green-50 text-[12px] text-green-900 shadow-sm">
        <Link href="/login" className="hover:underline">
          Harshal
        </Link>
        <Link href="/register" className="mx-4 hover:underline">
          patilharshal@2122
        </Link>
      </div>

      {/* Main Navbar */}
      <div
        className={`flex justify-between items-center px-10 py-4 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-white shadow"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg  sm:text-2xl font-extrabold text-green-700 tracking-wide cursor-pointer">
            Multiplier<span className="text-lime-600"> Fertilizer</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className=" gap-8 text-sm font-medium hidden lg:flex">
          <li>
            <Link href="/" className={`hover:text-green-600 ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-green-600 ${isActive("/about")}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`hover:text-green-600 ${isActive("/products")}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={`hover:text-green-600 ${isActive("/cart")}`}
            >
              Cart
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="relative lg:flex hidden items-center gap-12 text-gray-800 ">
          <Link href="/cart" className="relative text-2xl">
            <CiShoppingCart />
            <span className="absolute top-[-6px] right-[-8px] bg-green-500 text-white rounded-full px-1 text-[10px]">
              {cart.length}
            </span>
          </Link>
        

          <Link href="/profile" className="flex items-center gap-1">
            <button className="btn-primary flex w-[100%] items-center justify-center rounded-md border border-transparent  px-5 py-2.5 text-sm font-medium text-white shadow-md transition-transform transform hover:scale-[1.01]">
              Contact
            </button>
          </Link>
        </div>

        <div className="lg:hidden relative flex gap-8 text-2xl">
          <Link href="/cart" className="relative text-2xl">
            <CiShoppingCart />
            <span className="absolute top-[-6px] right-[-4px] bg-green-500 text-white rounded-full px-1 text-[10px]">
              {cart.length}
            </span>
          </Link>
          {isOpen ? (
            <RxCross2 onClick={() => setIsOpen((prev) => !prev)} />
          ) : (
            <GiHamburgerMenu onClick={() => setIsOpen((prev) => !prev)} />
          )}
        </div>
      </div>
      {
        <div
          className={`w-full bg-white/70 backdrop-blur-md shadow-md border border-green-500 duration-500 transition-all ease-in-out  ${
            isOpen ? "h-[172px] " : "h-0 opacity-0"
          }`}
          ref={menuRef}
        >
          <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-2 p-5`}>
            <Item isActive={isActive} onClick={setIsOpen} url={"/"}>
              Home
            </Item>
            <Item isActive={isActive} onClick={setIsOpen} url={"/about"}>
              About
            </Item>
            <Item isActive={isActive} onClick={setIsOpen} url={"/products"}>
              Products
            </Item>
            <Item isActive={isActive} onClick={setIsOpen} url={"/cart"}>
              Cart
            </Item>

            {/* <div className="p-5">
              <Link
                href="https://wa.me/919999999999"
                className="flex items-center "
              >
                <button className="btn-primary flex w-[100%] items-center justify-center rounded-md border border-transparent  px-5 py-2.5 text-sm font-medium text-white shadow-md transition-transform transform hover:scale-[1.01]">
                  <FaWhatsapp className="text-2xl text-white-600 mr-5" />{" "}
                  Contact Us
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      }
    </section>
  );
};

const Item = ({
  children,
  url,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  url: string;
  onClick: (item: boolean) => void;
  isActive: (val: string) => string;
}) => {
  return (
    <Link
      className={`flex justify-between border-b-[0.5px] border-[#E9E8EE] mx-4 
        ${isActive(url)}
        `}
      href={url}
      onClick={() => onClick(false)}
    >
      <span>{children}</span>
      <BiDownArrowAlt className="-rotate-90" />
    </Link>
  );
};

export default Nav;
