import React from "react";
import { GoHome } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import { SiReacthookform } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="border-b pb-4 lg:px-20 md:px-16 px-12 mt-4">
      <div className="flex items-center  gap-6 text-[#262626]/60 cursor-pointer">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <GoHome />
          </p>
          <p>Home</p>
        </div>
        <div className="lg:flex hidden items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <HiOutlineDocumentDuplicate />
          </p>
          <p>Interface</p>
        </div>
        <div className="lg:flex hidden items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <CiCalendarDate />
          </p>
          <p>Components</p>
        </div>
        <div className="lg:flex hidden items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <CiStickyNote />
          </p>
          <p>Pages</p>
        </div>
        <div className="lg:flex hidden items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <SiReacthookform />
          </p>
          <p>Forms</p>
        </div>
        <div className="lg:flex hidden items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <GrGallery />
          </p>
          <p>Gallery</p>
        </div>
        <div className="lg:flex hidden items-center space-x-1 cursor-pointer hover:text-[#3289EF] duration-300">
          <p>
            <IoDocumentTextOutline />
          </p>
          <p>Documention</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
