"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "../../../assets";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { menuItems } from "./constant";
import { MenuItemProps } from "./constant";

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => {
  const linkProps = href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  if (children === "Get Started") {
    return (
      <Link {...linkProps}>
        <Button>{children}</Button>
      </Link>
    );
  } else {
    return (
      <Link {...linkProps}>
        <span className="font-medium text-center py-3 transition duration-300">
          {children}
        </span>
      </Link>
    );
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <MenuItem key={index} href={item.href}>
        {item.label}
      </MenuItem>
    ));
  };

  return (
    <>
      <div className="px-4 py-3 sm:px-20 sm:py-7 flex items-center shadow-sm fixed top-0 z-50 bg-white w-full justify-between">
        <div className="flex items-center">
          <Image src={Logo} height={20} width={20} alt={"Logo"} />

          <h1 className="text-lg ml-2 font-medium">Direct Bridge Limited</h1>
        </div>
        <div className="hidden md:flex gap-5">
          <div className="flex items-center gap-7 text-sm">
            {renderMenuItems()}
          </div>
        </div>
        <div className="flex md:hidden">
          <MenuIcon onClick={toggleMenu} aria-label="Toggle menu" />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden mt-10 py-3">
          <div className="flex flex-col z-50 bg-slate-100 h-screen items-center justify-center fixed w-full gap-5">
            {renderMenuItems()}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
