import React from 'react'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            {/* Modal Dialog */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    {/* Close Button */}
                    <button 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").close()}
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-lg text-center">Login</h3>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-600 font-medium">Email</label>
                            <input 
                                type="email" 
                                placeholder="johnTom@gmail.com"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-600 font-medium">Password</label>
                            <input 
                                type="password"  
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between items-center">
                            <button 
                                type="submit" 
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Login
                            </button>
                            <p className="text-gray-600">
                                Not registered?{" "}
                                <a href="/signup" className="text-blue-500 underline">Signup</a>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
