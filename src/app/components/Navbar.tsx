import React from "react";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { TbDiamondFilled } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white text-gray-900 mx-auto max-w-screen-xl py-4 md:px-6 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex gap-x-2 items-center justify-between">
        <div>
          {/* Logo and Flower Icon */}
        <div className="flex items-center gap-2">
          <GiTwirlyFlower className="w-6 h-6 text-purple-500 hover:text-cyan-600" />

          {/* Search Input */}
        <div className="relative flex">
          <input
            type="text"
            className="rounded-3xl py-2 pl-4 pr-10 outline-none border border-gray-300 text-sm md:w-[340px] w-[160px] sm:py-2"
            placeholder="Find blooms"
          />
          <FaSearch className="md:w-5 md:h-5 text-purple-950 absolute right-3 top-1/2 transform -translate-y-1/2  lg:block md:block" />
        </div>
        </div>
        </div>

        

        <div className="flex justify-center gap-x-14 items-center">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 font-semibold text-pink-700 text-[18px]">
            <li className="hover:border-b-2 hover:border-b-orange-700">
              <Link href="/">{"𝓗𝓸𝓶𝓮"}</Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-orange-700">
              <Link href="/About">{"𝓐𝓫𝓸𝓾𝓽"}</Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-orange-700">
              <Link href="/faqsection">{"𝓕𝓐𝓠"}</Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-orange-700">
              <Link href="/contact">{"𝓒𝓸𝓷𝓽𝓪𝓬𝓽"}</Link>
            </li>
          </ul>

          {/* Icons and Mobile Menu */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0">
              <TbDiamondFilled className="text-cyan-500 w-5 h-5 hidden lg:block md:block" />
              <p className="text-sm text-orange-800 hidden lg:block md:block">
                {"𝑶𝒓𝒅𝒆𝒓 𝑵𝒐𝒘 & 𝑮𝒆𝒕 𝑰𝒕 𝑾𝒊𝒕𝒉𝒊𝒏"}{" "}
                <span className="text-cyan-800">
                  <strong>24 Hours!</strong>
                </span>
              </p>
            </div>
            <FaCartArrowDown className="p-1 w-8 h-8 rounded-full ring-2 ring-pink-300 text-amber-500 hover:ring-pink-400" />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <RxHamburgerMenu className="w-9 h-9 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <ul className="font-serif text-2xl text-gray-900 space-y-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/About">About</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}