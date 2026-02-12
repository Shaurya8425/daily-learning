import React from "react";
import NavBar from "../components/NavBar";
import Search from "../assets/search-alt-svgrepo-com.svg";
import Banner from "../assets/banner.webp";
import Harkirat from "../assets/harkirat.png";

function Home() {
  return (
    <div>
      <NavBar />
      <section className='relative flex items-center h-[90svh] overflow-hidden'>
        <div className='absolute inset-0 bg-indigo-900/60' />
        <img
          className='absolute inset-0 w-full h-full object-cover opacity-40'
          src={Banner}
          alt=''
        />
        <div className='flex flex-col items-center gap-2 px-10 z-10 text-white'>
          <div className='flex gap-3 items-center'>
            <img
              className='w-10 border-2 border-white rounded-full'
              src={Harkirat}
              alt=''
            />
            <p>Mentored by Harkirat Singh</p>
          </div>
          <h2 className='text-4xl font-bold'>Choose Your Learning Path</h2>
          <p>
            Master real engineering skills with hands-on mentorship. From
            full-stack development to DevOps - get job-ready with structured,
            industry-focused programs.
          </p>
          <div className='rounded-xl focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-300 flex gap-1 border w-full bg-white px-2 py-0.5'>
            <img className='w-5 rounded-xl bg-white' src={Search} alt='' />
            <input
              className='outline-none rounded-xl bg-white w-full text-md font-semibold text-black px-1 py-1'
              type='text'
              placeholder='Search for courses, topics, technologies...'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
