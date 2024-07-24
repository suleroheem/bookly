import React from 'react';
import {Link} from "react-router-dom";
import image1 from "../images/image1.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";




const Contactpages =() => {
    return (
        <div>
            <div>
            <div className='min-h-screen flex flex-col items-center justify-center font-extrabold'>
          <div className="relative w-full h-[450px] mb-20 bg-cover bg-center" 
           style={{ backgroundImage: `url(${image1})` }} >
            <div className="flex flex-col justify-center items-center text-center mt-40">
              <h2 className="font-black text-5xl">CONTACT US</h2>
              <div className='flex flex-row '>
                <h4 className="font-semibold text-2xl text-violet-700"><Link to="/homepage">home/ </Link></h4>
                <h4 className='font-semibold text-2xl '>
                  <Link to="/contact">contact</Link>
                </h4>
              </div>
            </div> 
      </div>
      </div>
      <div class="flex flex-col items-center mt-6 mb-5">
 
  <div class="w-full max-w-md">
    
    <form class="bg-gray-200 h-[690px] w-[590px] shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div>
    <h4 class="text-xl font-bold mb-4 text-center">SAY SOMETHING !</h4>
  </div>
      <div class="mb-4">
        <input type="text" placeholder="Enter Your Name" class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <div class="mb-4">
        <input type="email" placeholder="Enter Your Email" class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <div class="mb-4">
        <input type="number" placeholder="Enter Your Number" class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <div class="mb-4">
        <input type="text" placeholder="Enter Your Message" class="border border-gray-300 h-56  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
      </div>
      <div className='flex flex-row justify-center items-center'>

      <button class="bg-violet-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
  Send Message
</button>

      </div>
      

    </form>
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
    )
}

export default Contactpages;