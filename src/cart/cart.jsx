import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import image1 from "../images/image1.jpg";
import the_world_bg from "../images/the_world.jpg";
import the_happy_lemon_bg from "../images/the_happy_lemon.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";


const Cart = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[100%] flex flex-col items-center justify-center font-extrabold">
          <div
            className="relative w-full h-[450px] bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="flex flex-col justify-center items-center text-center mt-40">
              <h2 className="font-black text-5xl">SHOPPING CART</h2>
              <div className="flex flex-row ">
                <h4 className="font-semibold text-2xl text-violet-700">
                  <Link to="/homepage">home/ </Link>
                </h4>
                <h4 className="font-semibold text-2xl ">
                  <Link to="/cart">cart</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-2xl text-center">PRODUCTS ADDED</div>

        <div className="grid grid-cols-2 w-[47%] items-center justify-center  mt-[10px] m-[auto]">
          <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${the_world_bg})` }}
            >
              <div className="">
                <button
                  type="submit"
                  className="bg-orange-700 text-white h-10 w-16 rounded font-bold ml-[96px]"
                >
                  X
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">THE WORLD OF ART</p>
            </div>
            <div className="pr-32">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300  rounded  text-center mt-5"
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-orange-600 text-white h-30 w-48 rounded  font-bold mt-5"
              >
                update
              </button>
            </div>
          </div>
          <div className="bg-white h-auto w-60 shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${the_happy_lemon_bg})` }}
            >
              <div className="">
                <button
                  type="submit"
                  className="bg-orange-700 text-white h-10 w-16 rounded font-bold ml-[96px]"
                >
                  X
                </button>
              </div>
            </div>
            <div className="mt-4 ">
              <p className="text-center">Happy Lemons</p>
            </div>
            <div className="pr-32 ">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300  rounded  text-center mt-5"
              />
            </div>
            <div className=" mb-4">
              <button
                type="submit"
                className="bg-orange-700 text-white h-30 w-48 rounded  font-bold mt-5"
              >
                update
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center mt-4">
  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-5">
    Delete All
  </button>
</div>

<div className="text-lg font-bold flex flex-col space-x-4 border border-orange-400 h-32 w-[80%] gap-6 items-center justify-center">
            <p>
              Grand total: <span className="text-orange-500">$0/-</span>
            </p>
            <div className="Flex space-x-4">
            <button className="bg-amber-400 text-white rounded hover:bg-amber-500 w-64 h-12">
              <Link to="/shop">Continue Shopping</Link>
            </button>
            <button className="bg-purple-300 text-white rounded hover:bg-purple-400 w-64 h-12">
              <Link to="/checkout">Proceed To Checkout</Link>
            </button>
            </div>
          </div>

</div>
<div className="container mx-auto p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-24 cursor-pointer">
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <h5 className="mb-2">
              <Link to="/homepage" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/shop" className="text-gray-700 hover:text-blue-500">
                Shop
              </Link>
            </h5>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Extra Links</h4>
            <h5 className="mb-2">
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Login
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link
                to="/register"
                className="text-gray-700 hover:text-blue-500"
              >
                Register
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/cart" className="text-gray-700 hover:text-blue-500">
                Cart
              </Link>
            </h5>
            <h5 className="mb-2">
              <Link to="/orders" className="text-gray-700 hover:text-blue-500">
                Orders
              </Link>
            </h5>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <h5 className="flex items-center mb-2">
              <IoMdCall className="mr-2 bg-violet-600 text-white p-1 rounded-full" />
              +123-43-7854
            </h5>
            <h5 className="flex items-center mb-2">
              <IoMdCall className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              +123-43-7854
            </h5>
            <h5 className="flex items-center mb-2">
              <MdEmail className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              suleroheem@gmail.com
            </h5>
            <h5 className="flex items-center mb-2">
              <FaLocationDot className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Mumbai, India - 20012
            </h5>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <h5 className="flex items-center mb-2">
              <FaFacebookF className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Facebook
            </h5>
            <h5 className="flex items-center mb-2">
              <FaTwitter className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Twitter
            </h5>
            <h5 className="flex items-center mb-2">
              <FaSquareInstagram className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              Instagram
            </h5>
            <h5 className="flex items-center mb-2">
              <FaLinkedin className="mr-2 bg-violet-600 text-white p-1 rounded-full" />{" "}
              LinkedIn
            </h5>
          </div>
        </div>
      </div>
      <hr className='h-[2px] bg-black' />
      <div className="text-center mt-8">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <FaRegCopyright className="text-xl bg-violet-500 rounded-full" />
          <h4 className="text-lg font-medium">
            Copyright @ 2002 by Sule Roheem
          </h4>    
        </div>
      </div>
    </div>
  );
};
export default Cart;
