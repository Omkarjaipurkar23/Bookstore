import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className='max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      
      {/* Left Section */}
      <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 space-y-6'>
        <h1 className='text-4xl font-bold'>
          Hello, welcome here to learn something <span className='text-purple-700'>new every day!!!</span>
        </h1>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laborum eligendi! 
          Laboriosam adipisci numquam, rerum sint rem nam accusamus esse unde? 
          Suscipit, dolorum accusantium ad quae eaque consectetur ipsa beatae error quasi veniam 
          maxime placeat nihil voluptatem! Doloribus suscipit, vel eius, explicabo aliquid adipisci 
          incidunt, tempore ea reprehenderit earum officia?
        </p>

        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" className="grow" placeholder="Enter your email" />
        </label>

        <button className="btn text-white border-none mt-6 bg-blue-500 px-8 py-1 rounded-md hover:bg-blue-700 duration-300 cursor-pointer">
          Login
        </button>
      </div>

      {/* Right Section */}
      <div className='order-1 w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-16'>
  <img 
    src={banner} 
    className='w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] object-contain' 
    alt="Learning banner" 
  />
</div>

    </div>
  );
};

export default Banner;
