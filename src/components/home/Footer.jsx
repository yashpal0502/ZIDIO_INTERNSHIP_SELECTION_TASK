import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
          <div className="max-w-96">
            <div className="flex items-center gap-2">
              <img src={assets.image} alt="logo" className="h-12 w-auto" />
              <span className="font-bold text-lg text-indigo-600">HireMe</span>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Fast, easy, and professional resume building for every career
              stage. We’re here to help you shine.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                    stroke="#2563EB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                    stroke="#2563EB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                    stroke="#2563EB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
                    stroke="#2563EB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
              <ul className="text-sm text-gray-500 space-y-2 list-none">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
              <div className="text-sm text-gray-500 space-y-2 list-none">
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Terms
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © <a href="https://prebuiltui.com">HireMe</a>.
          All Right Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
