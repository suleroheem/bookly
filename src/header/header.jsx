import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed z-20 w-full flex flex-col top-0">
      <header className="flex flex-row bg-gray-200 h-14 font-bold">
        <div className="flex flex-row ml-4 sm:ml-28 mt-5 space-x-2 text-xl">
          <div className="hover:text-violet-600">
            <FaFacebookF />
          </div>
          <div className="hover:text-violet-600">
            <FaTwitter />
          </div>
          <div className="hover:text-violet-600">
            <FaSquareInstagram />
          </div>
          <div className="hover:text-violet-600">
            <FaLinkedin />
          </div>
        </div>
        <div className="flex flex-row ml-auto mr-4 sm:mr-36 mt-5 space-x-1">
          <div>
            <h4 className="hidden sm:block">new</h4>
          </div>
          <div className="text-purple-800">
            <Link to="/">Login | </Link>
          </div>
          <div className="text-purple-800">
            <Link to="/Register"> Register</Link>
          </div>
        </div>
      </header>
      <header className="bg-white shadow-md h-10 font-semibold flex items-center cursor-pointer">
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <h2 className="text-1xl ml-4 sm:ml-24 text-fuchsia-500">Bookly.</h2>
          <ul className="hidden sm:flex flex-row justify-center space-x-4 sm:space-x-9 mt-2">
            <li>
              <Link to="/homepage" className="hover:text-gray-700">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-700">About</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-gray-700">Shop</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-700">Contact</Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-gray-700">Orders</Link>
            </li>
          </ul>
          <div className="flex flex-row space-x-3 text-2xl mr-4 sm:mr-32">
            <div className="hover:text-gray-700">
              <Link to="/search"><FaSearch /></Link>
            </div>
            <div className="hover:text-gray-700">
              <FaUser />
            </div>
            <div className="hover:text-gray-700">
              <Link to="/cart"><FaShoppingCart /></Link>
            </div>
            <div>
              (0)
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

