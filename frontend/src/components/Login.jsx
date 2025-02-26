import React from 'react'
import { useForm } from "react-hook-form"
import axios  from 'axios'
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit =async (data) => {
        const userInfo={
          
            email : data.email,
            password : data.password,
        }
        await axios.post("http://localhost:4001/user/login",userInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data){
                
                toast.success("Logged in Successfully");
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                        
                    window.location.reload();
                }, 1000);
            
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err) => {
            if(err.response){
                console.log(err);
                
                toast.error("Error:"+ err.response.data.message)
                setTimeout(() =>{},2000);
            }
        })
    }

    return (
        <div>
            {/* Modal Dialog */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
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
                            <label className="block text-gray-600 font-medium dark:bg-slate-900 dark:text-white">Email</label>
                            <input 
                                type="email" 
                                placeholder="johnTom@gmail.com"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-600 font-medium dark:bg-slate-900 dark:text-white">Password</label>
                            <input 
                                type="password"  
                                placeholder="********"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-900 dark:text-white"
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
