import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex items-center justify-center h-screen w-full flex-col'>
            <p className='text-3xl font-semibold'>Welcome to </p>
            <p className='text-4xl py-2 font-bold'>Heliverse Internship Task</p>
            <div className='flex gap-2 my-3'>

            <Link className='px-5 py-2 rounded text-md bg-indigo-400 font-bold text-white active:scale-95 duration-100' to={'/login'}>Login</Link>
            <Link className='px-5 py-2 rounded text-md bg-indigo-400 font-bold text-white active:scale-95 duration-100' to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Home;