import React from 'react'
import { Link, useNavigate } from 'react-router-dom'  // ✅ Import useNavigate
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast"

function Signup() {
    const navigate = useNavigate(); // ✅ Initialize useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("User registered successfully");
                    localStorage.setItem("Users", JSON.stringify(res.data.user));

                    setTimeout(() => {
                        navigate("/"); // ✅ Redirect to home after 1 sec
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    }

    return (
        <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
            <div className="w-[600px] border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg p-6 bg-white dark:bg-slate-900 dark:text-white">
                {/* Close Button */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</Link>

                <h3 className="font-bold text-3xl text-center">Signup</h3>

                {/* Signup Form */}
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <label className="block">Name</label>
                        <input
                            type="text"
                            placeholder='John Smith'
                            className='w-full px-3 py-2 border rounded-md outline-none bg-white dark:bg-slate-800 dark:text-white dark:border-gray-600'
                            {...register("fullname", { required: true })}        
                        />
                        {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                    </div>

                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <label className="block">Email</label>
                        <input
                            type="email"
                            placeholder='johnTom@gmail.com'
                            className='w-full px-3 py-2 border rounded-md outline-none bg-white dark:bg-slate-800 dark:text-white dark:border-gray-600'
                            {...register("email", { required: true })}                
                        />
                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                    </div>

                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <label className="block">Password</label>
                        <input
                            type="password"
                            placeholder='********'
                            className='w-full px-3 py-2 border rounded-md outline-none bg-white dark:bg-slate-800 dark:text-white dark:border-gray-600'
                            {...register("password", { required: true })}        
                        />
                        {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                    </div>

                    {/* Signup Button */}
                    <div className='flex justify-between items-center mt-6'>
                        <button type='submit' className='bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200'>
                            Signup
                        </button>
                        <p className='text-md'>
                            Have an account?{" "} 
                            <Link to="/" className='underline text-blue-500 cursor-pointer'>
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
