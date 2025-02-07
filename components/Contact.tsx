"use client";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCopy } from "react-icons/fa";

const Contact = () => {
  // Function to copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your-email@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="w-full mt-5 pt-20 pb-10 relative" id="contact-section">
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.09] bg-grid-black/[0.2] absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex flex-col items-start text-left">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Let&apos;s Talk
          </h1>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Feel free to reach out to me
          </p>

          <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <p className="text-lg">rakeshpokala97@gmail.com</p>
              <button
                onClick={handleCopyEmail}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaRegCopy className="text-lg" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <FaPhone className="text-xl" />
              <p className="text-lg">+1 469 514 0874</p>
            </div>

            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <p className="text-lg">Richardson, TX, United States</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <form
            action="https://formspree.io/f/mrbggyqb"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-orange-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
