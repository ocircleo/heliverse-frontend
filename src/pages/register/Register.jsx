import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Register = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    const register = (e) => {
        e.preventDefault()
        let form = e.target;
        let email, password;
        email = form.email.value;
        password = form.password.value;
        console.log(email, password)

    }
    return (
        <div className='h-screen overflow-y-scroll py-10'>
            <form onSubmit={register} className='border-2 p-3 w-full  md:w-[500px] flex flex-col items-stretch rounded mx-auto'>
                <h2 className='text-center font-semibold text-2xl py-2'>Please Register</h2>

                <fieldset className='py-2'>
                    <label>First Name</label>
                    <input type="text" name='firstName' placeholder="Type here" className="input input-bordered w-full max-w-md" required />
                </fieldset>
                <fieldset className='py-2'>
                    <label>Last Name</label>
                    <input type="text" name='lastName' placeholder="Type here" className="input input-bordered w-full max-w-md" required />
                </fieldset>
                <fieldset className='py-2'>
                    <label>Enter Email</label>
                    <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-md" required />
                </fieldset>
                <fieldset className='py-2'>
                    <label>Work Domain</label>
                    <input type="text" name='domain' placeholder="Type here" className="input input-bordered w-full max-w-md" required />
                </fieldset>
                <fieldset className='py-2'>
                    <label>Gender</label>
                    <select name='gender' className="select select-bordered w-full max-w-md">
                        <option disabled selected value={null}>Who shot first?</option>
                        <option value={'male'}>Male</option>
                        <option value={'female'}>Female</option>
                        <option value={'n/a'}>Rather not say</option>
                    </select>
                </fieldset>
                <fieldset className='py-2 flex items-center gap-2'>
                    <input type="checkbox" name="available" className='h-4 w-4' />
                    <label >Available Now</label>
                </fieldset>
                <fieldset className='py-2'>
                    <label>Enter Password</label>
                    <input type={show ? "text" : "password"} name='password' placeholder="Type here" className="input input-bordered w-full max-w-md" required />
                    <p className='text-xs text-red-500'> {error}</p>
                </fieldset>
                <div className='flex gap-2 items-center my-2 cursor-pointer select-none' onClick={() => setShow(!show)}>
                    <input type="checkbox" className='h-4 w-4' checked={show ? true : false} />
                    <p>Show Password</p>

                </div>
                <button className='btn bg-gray-300 hover:bg-indigo-400 hover:text-white font-semibold'>Register</button>
                <Link to={'/login'} className='text-sm underline text-indigo-400 py-2 text-center'>Already have an acoutn? Login...!</Link>
                <Link to={'/'} className='text-sm underline text-indigo-400  text-center'>Go Back To Home</Link>
            </form>
        </div>
    );
};

export default Register;