import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Contact() {
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

                            <h3 className="font-bold text-3xl flex items-center justify-center">Contact us</h3>

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
    <label className="block ">Comment</label>
    <textarea
        placeholder='Enter your comment or contact information...'
        className='w-80 h-28 px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 resize-none'
        {...register("contact", { required: true })}        
    />
    <br />
    {errors.contact && <span className="text-sm text-red-500">This field is required</span>}
</div>


                            {/* Button */}
                            <div className='flex justify-between mx-1 mt-4'>
                                <button type='submit' className='bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                                    Send message
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact
