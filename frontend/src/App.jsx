import React, { useEffect } from 'react';
import Home from './Home/Home';
import Course from './components/Course';
import { Route, Routes, Navigate } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  // Apply dark mode class to <html> if dark mode is enabled
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-900 dark:text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute h-screen w-screen -z-10 bg-white dark:bg-slate-900 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
