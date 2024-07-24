import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/image1.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Orderpages = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center font-extrabold">
        <div
          className="relative w-full h-[450px] mb-[10%] bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="flex flex-col justify-center items-center text-center mt-40">
            <h2 className="font-black text-5xl">YOUR ORDERS</h2>
            <div className="flex flex-row ">
              <h4 className="font-semibold text-2xl text-violet-700">
                <Link to="/homepage">home/ </Link>
              </h4>
              <h4 className="font-semibold text-2xl ">
                <Link to="/order">order</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-center text-3xl"> PLACED ORDER</h2>
      </div>
      <div class=" mx-auto mt-10 mb-[20%] p-6 bg-gray-200 w-[900px] h-[400px] border border-black shadow-md rounded-md">
  <div className="">
    <div className="flex flex-row space-x-3 mb-4">
    <div class="font-bold">Placed on:</div> <div className="text-violet-400">04-Jul-2024</div> </div>
    <div className="flex flex-row space-x-3 mb-4">
    <div class="font-bold">Name:</div> <div  className="text-violet-400">Roheem</div> </div>
    <div className="flex flex-row space-x-3 mb-4">
    <div class="font-bold">Number:</div> <div  className="text-violet-400">0913423445</div> </div>
    <div className="flex flex-row space-x-3 mb-4">
    <div class="font-bold">Email:</div> <div  className="text-violet-400">suleroheem@gmail.com</div>
    </div>
    <div className="flex flex-row space-x-3 mb-4" >
    <div class="font-bold">Address:</div> <div  className="text-violet-400">Flat 2, Mushin Ilasamaja, Dehli Mumbai - 353553</div> </div>
    <div  className="flex flex-row space-x-3 mb-4">
    <div class="font-bold">Payment Method:</div> <div  className="text-violet-400">CashApp</div> </div>
    <div  className="flex flex-row space-x-3 mb-4">
    <div class="font-bold">Your Orders:</div> <div  className="text-violet-400">The World of Art (1), Happy Lemons (2), Be Well Bee (2)</div> </div>

<div  className="flex flex-row space-x-3 mb-4">    <div class="font-bold">Total Price:</div> <div  className="text-violet-400">$198</div></div>
<div  className="flex flex-row space-x-3 v">
    <div class="font-bold">Payment Status:</div> <div  className="text-red-400">Pending</div></div>
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
export default Orderpages;
