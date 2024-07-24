import React from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";
import image1 from "../images/image1.jpg";

const Checkout = () => {
  return (
    <>
      <Header />

      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="text-black flex flex-col pt-28">
          <h1 className="text-5xl font-bold">OUR SHOP</h1>
          <p className="mt-2">
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / Checkout
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto p-8 bg-gray-100 mt-8 rounded-lg shadow-lg mb-8 border border-black justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">PLACE YOUR ORDER</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Your Name:</label>
            <input type="text" placeholder="Enter your name" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Your Number:</label>
            <input type="text" placeholder="Enter your number" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Your Email:</label>
            <input type="email" placeholder="Enter your email" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Payment Method:</label>
            <select className="p-2 border rounded">
              <option>Cash on Delivery</option>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Paytm</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Address Line 1:</label>
            <input type="text" placeholder="e.g., Flat no." className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Address Line 2:</label>
            <input type="text" placeholder="e.g., Street name" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">City:</label>
            <input type="text" placeholder="Enter your city" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">State:</label>
            <input type="text" placeholder="e.g., Maharashtra" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Country:</label>
            <input type="text" placeholder="Enter your country" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Pin Code:</label>
            <input type="text" placeholder="e.g., 123456" className="p-2 border rounded"/>
          </div>
        </form>
        <div className="mt-8">
          <button className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32">
            Order Now
          </button>
        </div>
      </div>

    
    </>
  );
};

export default Checkout;