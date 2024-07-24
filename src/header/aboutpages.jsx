 import React from 'react';
import {Link} from "react-router-dom"

import image1 from "../images/image1.jpg";
import about_img_bg from "../images/about-img.jpg";
import pic_bg from "../images/pic.jpg";
import pic_2_bg from "../images/pic-2.jpg";
import pic_3_bg from "../images/pic-3.jpg";
import pic_4_bg from "../images/pic-4.jpg";
import pic_5_bg from "../images/pic-5.jpg";
import pic_6_bg from "../images/pic-6.jpg";
import author_1_bg from "../images/author-1.jpg";
import author_2_bg from "../images/author-2.jpg";
import author_3_bg from "../images/author-3.jpg";
import author_4_bg from "../images/author-4.jpg";
import author_5_bg from "../images/author-5.jpg";
import author_6_bg from "../images/author-6.jpg";
import { IoIosStar } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import "./style.css";



const Aboutpages = () => {
    return(
      <div>
        <div className="min-h-screen flex flex-col items-center justify-center font-extrabold ">
      <div className="relative w-full h-[450px] mt-[90px] bg-cover bg-center" 
           style={{ backgroundImage: `url(${image1})` }} >
            <div className="flex flex-col justify-center items-center text-center mt-40">
              <h2 className="font-black text-5xl">ABOUT US</h2>
              <div className='flex flex-row '>
                <h4 className="font-semibold text-2xl text-violet-700"><Link to="/homepage">home/ </Link></h4>
                <h4 className='font-semibold text-2xl '>
                  <Link to="/about">about</Link>
                </h4>
              </div>
            </div>
      </div>
      <div className="container mx-auto my-8">
      <div className="flex flex-row items-center mb-14">
        <div
          className="h-80 w-full bg-contain bg-center bg-no-repeat -ml-80"
          style={{ backgroundImage: `url(${about_img_bg})` }}
        ></div>
        <div className="flex flex-col h-72 w-[36%] gap-2 bg-gray-200  -ml-[33.1%] pl-8 justify-center">
          <h2 className="text-4xl font-bold">ABOUT US</h2>
          <p className="leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ex
            perferendis nostrum nobis, <br /> illum reprehenderit excepturi necessitatibus,
            <br /> placeat nisi nulla dicta impedit fugiat non similique quidem. Fuga,
            doloremque ex!
          </p>
          <button className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32 mt-4">
            <Link to="/about">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
   
    
      <div className="text-center font-bold text-3xl">
        <h2>CLIENTS REVIEWS</h2>
      </div>
      <div className="grid grid-cols-3 w-[80%] gap-1 mt-6  items-center ">
      <div className="container mx-auto my-8">
      <div className="bg-white h-96 w-[90%] shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
      <div
      className="bg-no-repeat bg-cover w-[90px] h-[90px] rounded-full"
      style={{ backgroundImage: `url(${pic_bg})` }}
    ></div>

        <p className="text-center  ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam est perferendis iure temporibus natus impedit dicta voluptatem! Cum?
        </p>
        <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold mt-4">John Doe</h3>
      </div>
    </div>
      <div className="container mx-auto my-8">
      <div className="bg-white  h-96 w-[90%] shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
      <div
      className="bg-no-repeat bg-cover w-[90px] h-[90px] rounded-full"
      style={{ backgroundImage: `url(${pic_2_bg})` }}
    ></div>

        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam est perferendis iure temporibus natus impedit dicta voluptatem! Cum?
        </p>
        <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold mt-4">John Doe</h3>
      </div>
    </div>
      <div className="container mx-auto my-8">
      <div className="bg-white h-96 w-[90%] shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
      <div
      className="bg-no-repeat bg-cover w-[90px] h-[90px] rounded-full"
      style={{ backgroundImage: `url(${pic_3_bg})` }}
    ></div>

        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam est perferendis iure temporibus natus impedit dicta voluptatem! Cum?
        </p>
        <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold mt-4">John Doe</h3>
      </div>
    </div>
      <div className="container mx-auto my-8">
      <div className="bg-white h-96 w-[90%] shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
      <div
      className="bg-no-repeat bg-cove w-[90px] h-[90px] rounded-full"
      style={{ backgroundImage: `url(${pic_4_bg})` }}
    ></div>

        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam est perferendis iure temporibus natus impedit dicta voluptatem! Cum?
        </p>
        <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold mt-4">John Doe</h3>
      </div>
    </div>
      <div className="container mx-auto my-8">
      <div className="bg-white  h-96 w-[90%] shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
      <div
      className="bg-no-repeat bg-cover  w-[90px] h-[90px] rounded-full"
      style={{ backgroundImage: `url(${pic_5_bg})` }}
    ></div>

        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam est perferendis iure temporibus natus impedit dicta voluptatem! Cum?
        </p>
        <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold mt-4">John Doe</h3>
      </div>
    </div>
      <div className="container mx-auto my-8">
      <div className="bg-white h-96 w-[90%] shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
      <div
      className="bg-no-repeat bg-cover  w-[90px] h-[90px] rounded-full"
      style={{ backgroundImage: `url(${pic_6_bg})` }}
    ></div>

        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ullam est perferendis iure temporibus natus impedit dicta voluptatem! Cum?
        </p>
        <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold mt-4">John Doe</h3>
      </div>
    </div>
    </div>
      <div >
    
        <div>
          <h3 className='font-bold text-3xl text-center '>
            GREAT AUTHORS
          </h3>
        </div>
        <div className=" grid grid-cols-3  w-[100%] gap-7 mt-6 m-[auto] items-center mb-6 ">
      <div className='relative overflow-hidden author'>
       <div
      className="bg-no-repeat bg-cover h-80 w-72 border border-black "
      style={{ backgroundImage: `url(${author_1_bg})` }}
    >
       <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
         <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
        <FaFacebookF />
      </div>
      <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaTwitter />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaSquareInstagram />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaLinkedin />
      </div>
      </div> 
    </div>

    <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
      <h2>
        john deo
      </h2>
    </div>
      </div>
      <div className='relative overflow-hidden author'>
       <div
      className="bg-no-repeat bg-cover h-80 w-72 border border-black "
      style={{ backgroundImage: `url(${author_2_bg})` }}
    >
      <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
         <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
        <FaFacebookF />
      </div>
      <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaTwitter />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaSquareInstagram />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaLinkedin />
      </div>
      </div>
    </div>

    <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
      <h2>
        john deo
      </h2>
    </div>
      </div>
      <div className='relative overflow-hidden author'>
       <div
      className="bg-no-repeat bg-cover h-80 w-72 border border-black "
      style={{ backgroundImage: `url(${author_3_bg})` }}
    >
      <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
         <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
        <FaFacebookF />
      </div>
      <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaTwitter />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaSquareInstagram />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaLinkedin />
      </div>
      </div>
    </div>

    <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
      <h2>
        john deo
      </h2>
    </div>
      </div>
      <div  className='relative overflow-hidden author'>
       <div
      className="bg-no-repeat bg-cover h-80 w-72 border border-black "
      style={{ backgroundImage: `url(${author_4_bg})` }}
    >
      <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
         <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
        <FaFacebookF />
      </div>
      <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaTwitter />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaSquareInstagram />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaLinkedin />
      </div>
      </div>
    </div>

    <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
      <h2>
        john deo
      </h2>
    </div>
      </div>
      <div  className='relative overflow-hidden author'>
       <div
      className="bg-no-repeat bg-cover h-80 w-72 border border-black "
      style={{ backgroundImage: `url(${author_5_bg})` }}
    >
      <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
         <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
        <FaFacebookF />
      </div>
      <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaTwitter />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaSquareInstagram />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaLinkedin />
      </div>
      </div>
    </div>

    <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
      <h2>
        john deo
      </h2>
    </div>
      </div>
      <div className='relative overflow-hidden author'>
       <div
      className="bg-no-repeat bg-cover h-80 w-72 border border-black "
      style={{ backgroundImage: `url(${author_6_bg})` }}
    >
      <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
         <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
        <FaFacebookF />
      </div>
      <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaTwitter />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaSquareInstagram />
      </div>
      <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
        <FaLinkedin />
      </div>
      </div>
    </div>

    <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
      <h2>
        john deo
      </h2>
    </div>
      </div>
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



export default Aboutpages