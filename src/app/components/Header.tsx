"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DownOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";

import sgv1 from "@/Data/Icon/web Logo.svg";

const Header: React.FC = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

 

  return (
    <header className="h-[80px] bg-white shadow-sm flex justify-center items-center">
      <div className="container mx-auto px-7 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="">
          <Image src={sgv1} alt="Logo" width={120} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden tablet:flex space-x-6">
          <div
            className="relative group"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <Link
              href="/solutions"
              className="flex items-center space-x-1 cursor-pointer text-blue-600"
            >
              <p className="text-lg">Solutions</p>
              <DownOutlined className="text-[10px] font-bold mt-1" />
            </Link>

            {isSolutionsOpen && (
              <div className="absolute right-[-90px] mt-2 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-200">
                <Link
                  href="/solutions/anycaas"
                  className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-blue-600"
                >
                  AnyCaaS
                </Link>
                <div className="w-full h-[1px] bg-blue-600 opacity-20" />
                <Link
                  href="/solutions/anybaas"
                  className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-blue-600"
                >
                  AnyBaaS
                </Link>
                <div className="w-full h-[1px] bg-blue-600 opacity-20" />
                <Link
                  href="/solutions/anypaas"
                  className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-blue-600"
                >
                  AnyPaaS
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/"
            className="text-lg text-blue-600 hover:underline underline-offset-[18px]"
          >
            Services
          </Link>

          <Link
            href="/"
            className="text-lg text-blue-600 hover:underline underline-offset-[18px]"
          >
            About Us
          </Link>

          <button className="border border-blue-600 rounded-full px-4 py-1 flex items-center space-x-1 text-blue-600">
            🌍 <span className="text-sm ml-1">EN</span>{" "}
            <DownOutlined className="text-sm" />
          </button>
        </nav>

        <div className="hidden tablet:flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold px-6 py-2 rounded-lg"
          >
            Contact Us →
          </Link>
        </div>

        <button className="flex tablet:hidden" >
          <CloseOutlined className="text-2xl" />
          <MenuOutlined className="text-2xl" />
        </button>
      </div>

     
    </header>
  );
};

export default Header;
