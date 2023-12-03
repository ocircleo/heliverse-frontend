import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../features/dataSlice/userSlice';
import profile from '/profile.png'
const Home = () => {
    const { user_data, user_loading } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const logoutU = () => {
        dispatch(logout())
        localStorage.removeItem("acces-token");
        localStorage.removeItem("acces-email");
    }
    return (
        <div className='flex items-center justify-center h-screen w-full flex-col'>
            <p className='text-3xl font-semibold'>Welcome to </p>
            <p className='text-4xl py-2 font-bold'>Heliverse Internship Task</p>
            {
                user_loading ? <p className='text-xl font-semibold text-black py-5'>Loading user Info</p> : user_data.email ? <div className='flex flex-col items-center mt-4 text-lg justify-center '>
                    <p>logged in as</p>
                    <img src={user_data?.avatar} onError={profile} className='h-14 w-14 rounded-full' alt="" />
                    <p className='font-semibold'>{user_data.first_name} {user_data.
                        last_name}</p>
                    <p className='bg-gray-200 rounded px-2 '>email: {user_data.email}</p>
                    <button className='btn bg-red-600' onClick={logoutU}> Logout</button>
                </div> : <div className='flex gap-2 my-3'>

                    <Link className='px-5 py-2 rounded text-md bg-indigo-400 font-bold text-white active:scale-95 duration-100' to={'/login'}>Login</Link>
                    <Link className='px-5 py-2 rounded text-md bg-indigo-400 font-bold text-white active:scale-95 duration-100' to={'/register'}>Register</Link>
                </div>
            }

        </div>
    );
};

export default Home;