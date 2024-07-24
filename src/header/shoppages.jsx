import React from 'react';
import { Link } from "react-router-dom";
import image1 from "../images/image1.jpg";
import the_world_bg from "../images/the_world.jpg";
import the_happy_lemon_bg from "../images/the_happy_lemon.jpg";
import darknet_bg from "../images/darknet.jpg";
import be_well_bee_bg from "../images/be_well_bee.jpg";
import red_queen_bg from "../images/red_queen.jpg";
import nightshade_bg from "../images/nightshade.jpg";
import holy_ghosts_bg from "../images/holy_ghosts.jpg";
import economic_bg from "../images/economic.jpg";
import { FaFacebookF, FaTwitter, FaSquareInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Shoppages = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-col items-center justify-center font-extrabold'>
                <div className="relative w-full h-[450px] mb-16 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${image1})` }} >
                    <div className="flex flex-col justify-center items-center text-center mt-40">
                        <h2 className="font-black text-3xl md:text-5xl">OUR SHOP</h2>
                        <div className='flex flex-row'>
                            <h4 className="font-semibold text-lg md:text-2xl text-violet-700">
                                <Link to="/homepage">home/ </Link>
                            </h4>
                            <h4 className='font-semibold text-lg md:text-2xl'>
                                <Link to="/shop">shop</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="font-bold text-xl md:text-2xl text-center">
                    <h4>LATEST PRODUCTS</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mt-6 mb-5 items-center">
                    {[
                        { img: the_world_bg, price: "$50/-", title: "THE WORLD OF ART" },
                        { img: the_happy_lemon_bg, price: "$20/-", title: "Happy Lemons" },
                        { img: darknet_bg, price: "$50/-", title: "Darknet" },
                        { img: be_well_bee_bg, price: "$12/-", title: "be well bee" },
                        { img: red_queen_bg, price: "$12/-", title: "red queen" },
                        { img: nightshade_bg, price: "$12/-", title: "nightshade" },
                        { img: holy_ghosts_bg, price: "$12/-", title: "holy ghosts" },
                        { img: economic_bg, price: "$12/-", title: "economic" }
                    ].map((product, index) => (
                        <div key={index} className="bg-white h-auto w-full sm:w-60 shadow-lg border border-black p-4 rounded-md">
                            <div
                                className="bg-cover bg-no-repeat w-full h-40 rounded"
                                style={{ backgroundImage: `url(${product.img})` }}
                            >
                                <div className="">
                                    <button
                                        type="submit"
                                        className="bg-orange-700 text-white h-8 w-full rounded font-bold"
                                    >
                                        {product.price}
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-center text-sm md:text-base">{product.title}</p>
                            </div>
                            <div className="mt-4">
                                <input
                                    type="number"
                                    placeholder="1"
                                    className="border border-gray-300 rounded text-center w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-violet-700 text-white h-10 w-full rounded font-bold"
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto p-6 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h4>
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
                        <h4 className="text-lg md:text-xl font-semibold mb-4">Extra Links</h4>
                        <h5 className="mb-2">
                            <Link to="/" className="text-gray-700 hover:text-blue-500">
                                Login
                            </Link>
                        </h5>
                        <h5 className="mb-2">
                            <Link to="/register" className="text-gray-700 hover:text-blue-500">
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
                        <h4 className="text-lg md:text-xl font-semibold mb-4">Contact Info</h4>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <IoMdCall className="mr-2 bg-violet-600 text-white p-1 rounded-full" />
                            +123-43-7854
                        </h5>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <MdEmail className="mr-2 bg-violet-600 text-white p-1 rounded-full" /> 
                            suleroheem@gmail.com
                        </h5>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <FaLocationDot className="mr-2 bg-violet-600 text-white p-1 rounded-full" /> 
                            Mumbai, India - 20012
                        </h5>
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h4>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <FaFacebookF className="mr-2 bg-violet-600 text-white p-1 rounded-full" /> 
                            Facebook
                        </h5>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <FaTwitter className="mr-2 bg-violet-600 text-white p-1 rounded-full" /> 
                            Twitter
                        </h5>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <FaSquareInstagram className="mr-2 bg-violet-600 text-white p-1 rounded-full" /> 
                            Instagram
                        </h5>
                        <h5 className="flex items-center mb-2 text-sm md:text-base">
                            <FaLinkedin className="mr-2 bg-violet-600 text-white p-1 rounded-full" /> 
                            LinkedIn
                        </h5>
                    </div>
                </div>
            </div>
            <hr className='h-[2px] bg-black' />
            <div className="text-center mt-8">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <FaRegCopyright className="text-xl bg-violet-500 rounded-full p-1" />
                    <h4 className="text-lg font-medium">
                        Copyright @ 2002 by Sule Roheem
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Shoppages;
