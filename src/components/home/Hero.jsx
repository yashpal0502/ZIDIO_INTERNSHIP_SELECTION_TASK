import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat font-poppins">
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={assets.image} alt="logo" className="h-12 w-auto" />
          <span className="font-bold text-lg text-indigo-600">HireMe</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href="/" className="hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:block space-x-3">
          <Link
            to="/app?state=register"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md"
          >
            Get started
          </Link>
          <Link
            to="/app?state=login"
            className="hover:bg-slate-100 transition px-6 py-2 border border-indigo-600 rounded-md"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="open-menu"
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Main Hero Content */}
      <main className="flex flex-col items-center max-md:px-2">
        <div class="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 bg-black text-xs my-3">
          <div class="flex items-center">
            <img
              class="size-7 rounded-full border-3 border-white"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
            />
            <img
              class="size-7 rounded-full border-3 border-white -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
            />
            <img
              class="size-7 rounded-full border-3 border-white -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3"
            />
          </div>
          <p class="-translate-x-2 text-white">
            Join community of 1m+ founders
          </p>
        </div>

        <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-slate-900">
          Build. Edit. Download. Land the Job.
        </h1>
        <p className="text-center text-base text-slate-700 max-w-lg mt-2">
          Create a polished, professional resume in just minutes. Customize
          every detail, preview your design in real time, and download your
          final version instantly — ready to impress every employer.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link
            to="/app"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11"
          >
            Get started
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Hero;
