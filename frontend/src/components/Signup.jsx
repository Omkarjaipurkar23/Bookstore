import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        {/* Signup Form */}
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close Button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-3xl flex items-center justify-center">Signup</h3>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder='John Smith'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}        
                                />
                                <br />
                                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='johnTom@gmail.com'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })}                
                                />
                                <br/>
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder='********'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}        
                                />
                                <br />
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                            </div>

                            {/* Button */}
                            <div className='flex justify-between mx-1 mt-4'>
                                <button type='submit' className='bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
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
            </div>
        </>
    )
}

export default Signup
