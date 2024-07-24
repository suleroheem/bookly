import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import home_bg from "../images/home-bg.jpg";
import the_world_bg from "../images/the_world.jpg";
import the_happy_lemon_bg from "../images/the_happy_lemon.jpg";
import darknet_bg from "../images/darknet.jpg";
import be_well_bee_bg from "../images/be_well_bee.jpg";
import red_queen_bg from "../images/red_queen.jpg";
import nightshade_bg from "../images/nightshade.jpg";
import about_img_bg from "../images/about-img.jpg";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


const Pages = () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://api.example.com/products");
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  
  return (
    <div>
      <div
        className="relative mt-[100px] h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${home_bg})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <div className="text-white text-4xl font-bold mb-4">HAND PICKED BOOK</div>
          <div className="text-white text-4xl font-bold mb-4">TO YOUR DOOR</div>
          <p className="text-white text-lg mb-8 px-4 text-center w-[80%] md:w-[50%] lg:w-[35%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nulla, reiciendis eius voluptatum fuga ratione ea laboriosam error saepe.
          </p>
          <div>
            <Link to="/about">
              <button
                type="submit"
                className="bg-violet-500 hover:bg-blue-700 hover:w-[300px] transition duration-0 hover:duration-150 text-white font-bold py-2 px-4 rounded"
              >
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="font-semibold text-center">
          <h4>LATEST PRODUCTS</h4>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] sm:w-[70%] lg:w-[50%] mx-auto gap-6 mt-6 mb-5 items-center">
          <div className="bg-white h-auto w-full shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${the_world_bg})` }}
            >
              <div>
                <button
                  type="submit"
                  className="bg-orange-700 text-white h-10 w-16 rounded font-bold"
                >
                  $50/-
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
                className="border border-gray-300 rounded text-center mt-5"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet-700 text-white h-30 w-full rounded font-bold mt-5"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="bg-white h-auto w-full shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${the_happy_lemon_bg})` }}
            >
              <div>
                <button
                  type="submit"
                  className="bg-orange-700 text-white h-auto w-16 rounded font-bold"
                >
                  $20/-
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">Happy Lemons</p>
            </div>
            <div className="pr-32">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300 rounded text-center mt-5"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-violet-700 text-white h-30 w-full rounded font-bold mt-5"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="bg-white h-auto w-full shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${darknet_bg})` }}
            >
              <div>
                <span
                  className="bg-orange-700 text-white h-18 w-28 rounded font-bold"
                  type="submit"
                >
                  $50/-
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">Darknet</p>
            </div>
            <div className="pr-32">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300 rounded text-center mt-5"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet-700 text-white h-30 w-full rounded font-bold mt-5"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="bg-white h-auto w-full shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${be_well_bee_bg})` }}
            >
              <div>
                <span
                  className="bg-orange-700 text-white h-18 w-28 rounded font-bold"
                  type="submit"
                >
                  $12/-
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">Be Well Bee</p>
            </div>
            <div className="pr-32">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300 rounded text-center mt-5"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet-700 text-white h-30 w-full rounded font-bold mt-5"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="bg-white h-auto w-full shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${red_queen_bg})` }}
            >
              <div>
                <span
                  className="bg-orange-700 text-white h-18 w-28 rounded font-bold"
                  type="submit"
                >
                  $12/-
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">Red Queen</p>
            </div>
            <div className="pr-32">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300 rounded text-center mt-4"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet-700 text-white h-30 w-full rounded font-bold mt-7"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="bg-white h-auto w-full shadow-lg border border-black p-7 rounded-md">
            <div
              className="bg-cover bg-no-repeat w-40 h-64 rounded"
              style={{ backgroundImage: `url(${nightshade_bg})` }}
            >
              <div>
                <span
                  className="bg-orange-700 text-white h-18 w-28 rounded font-bold"
                  type="submit"
                >
                  $12/-
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">Nightshade</p>
            </div>
            <div className="pr-32">
              <input
                type="number"
                placeholder="1"
                className="border border-gray-300 rounded text-center mt-3"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet-700 text-white h-30 w-full rounded font-bold mt-7"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[450px] bg-cover bg-center" style={{ backgroundImage: `url(${about_img_bg})` }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <div className="text-white text-4xl font-bold mb-4">LIFETIME ACHIEVEMENTS</div>
          <div className="text-white text-4xl font-bold mb-4">AT YOUR FINGERTIPS</div>
          <p className="text-white text-lg mb-8 px-4 text-center w-[80%] md:w-[50%] lg:w-[35%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci venenatis, finibus augue at, posuere purus.
          </p>
          <div>
            <Link to="/achievements">
              <button
                type="submit"
                className="bg-violet-500 hover:bg-blue-700 hover:w-[300px] transition duration-0 hover:duration-150 text-white font-bold py-2 px-4 rounded"
              >
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-violet-500 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
          <div className="flex flex-col items-center">
            <IoMdCall className="text-2xl text-white" />
            <p className="text-white mt-2">+123 456 7890</p>
          </div>
          <div className="flex flex-col items-center">
            <MdEmail className="text-2xl text-white" />
            <p className="text-white mt-2">info@domain.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLocationDot className="text-2xl text-white" />
            <p className="text-white mt-2">123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="text-white text-sm hover:text-gray-400">
              Privacy Policy
            </div>
          </div>
          <div className="flex justify-center mt-2 sm:mt-0">
            <div to="/" className="text-white mx-2">
              <FaFacebookF />
            </div>
            <div className="text-white mx-2">
              <FaTwitter />
            </div>
            <div className="text-white mx-2">
              <FaSquareInstagram />
            </div>
            <div className="text-white mx-2">
              <FaLinkedin />
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <FaRegCopyright className="text-white mr-1" />
            <span className="text-white text-sm">2023 All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pages;

