import React, { useState } from "react";
import "./nav-bar.css";
import BurgerMenu from "../assets/burger-menu-svgrepo-com.svg";
import Cross from "../assets/cross-svgrepo-com.svg";
import Search from "../assets/search-alt-svgrepo-com.svg";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=' h-14 flex items-center justify-between px-4 sticky top-0 z-50'>
      <p className='font-bold text-xl'>
        100<span className='text-red-500'>x</span>Devs
      </p>
      <div
        className={`fixed h-screen w-full inset-0 bg-white transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className='h-14 flex items-center justify-between px-4 border border-gray-200'
        >
          <p className='font-bold text-xl'>
            100<span className='text-red-500'>x</span>Devs
          </p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='px-1 py-0.75 rounded-md z-50'
          >
            <img className='w-7' src={Cross} alt='' />
          </button>
        </div>
        <div className='p-7 flex flex-col gap-3'>
          <div className='rounded focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-300 p-2 flex border'>
            <img className='w-5' src={Search} alt='' />
            <input
              className='outline-none w-full'
              type='text'
              placeholder='Type to search'
            />
          </div>
          <a className='rounded p-2 text-blue-900 bg-gray-100' href=''>
            Home
          </a>
          <a className='rounded p-2 text-blue-900 bg-gray-100' href=''>
            Course
          </a>
          <a className='rounded p-2 text-blue-900 bg-gray-100' href=''>
            Store
          </a>
          <hr className='border-gray-200' />
          <button className='border p-2 text-sm font-semibold rounded-xl text-blue-900'>
            SignUp
          </button>
          <button className='border p-2 text-sm font-semibold rounded-xl text-white bg-blue-900'>
            LogIn
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='bg-blue-900 px-1 py-0.75 rounded-md'
      >
        <img className='w-6 invert' src={BurgerMenu} alt='' />
      </button>
    </nav>
  );
}

export default NavBar;
