import React from 'react';
import Home from './Home/Home';
import Course from './components/Course';
import { Route, Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute h-screen w-screen -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>

   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Courses/>}/>  
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>


    </div>
  );
};

export default App;
