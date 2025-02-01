"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { DownOutlined } from "@ant-design/icons";

import sgv1 from "@/Data/Icon/web Logo.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[80px] bg-white shadow-sm flex justify-center items-center">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="">
          <Image src={sgv1} alt="ok" className="h-[50pxx]" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden tablet:flex space-x-6">
          <Link href="/" className="flex space-x-1">
            <p>Solutions</p>

            <DownOutlined />
          </Link>

          <Link href="/">Services</Link>

          <Link href="/">About Us</Link>
        </nav>

        <nav>ok</nav>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button> */}
      </div>

      {/* Mobile Menu */}
    </div>
  );
};

export default Header;
