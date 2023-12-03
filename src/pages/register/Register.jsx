import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/dataSlice/userSlice';

const Register = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const { user_data } = useSelector(state => state.userReducer)
    const registerF = (e) => {
        e.preventDefault()
        let form = e.target;
        let email, password, first_name, last_name, gender, domain, available;
        first_name = form.firstName.value;
        last_name = form.lastName.value;
        email = form.email.value;
        password = form.password.value;
        domain = form.domain.value;
        gender = form.gender.value
        available = form.available.value;
        if (password.length < 5) {
            setError("password must be at least 5 character");
            return;
        }
        setError('')
        const body = { email: email, password: password, first_name: first_name, last_name: last_name, gender: gender, domain: domain, available: available, avatar: "" }
        dispatch(register(body))
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (user_data.email) {
            navigate('/')
        }
    }, [user_data])
    return (
        <div className='h-screen overflow-y-scroll py-10'>
            <form onSubmit={registerF} className='border-2 p-3 w-full  md:w-[500px] flex flex-col items-stretch rounded mx-auto'>
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
                    <label>Domain</label>
                    <select name='domain' className="select select-bordered w-full max-w-md" required>
                        <option value={'Sales'}>Sales</option>
                        <option value={'Finance'}>Finance</option>
                        <option value={'Marketing'}>Marketing</option>
                        <option value={'IT'}>IT</option>
                        <option value={'Management'}>Management</option>
                        <option value={'UI Designing'}>UI Designing</option>
                        <option value={'Business Development'}>Business Development</option>
                    </select>
                </fieldset>
                <fieldset className='py-2'>
                    <label>Gender</label>
                    <select name='gender' className="select select-bordered w-full max-w-md">
                        <option value={'Male'}>Male</option>
                        <option value={'Female'}>Female</option>
                        <option value={'Agender'}>Agender</option>
                        <option value={'Bigender'}>Bigender</option>
                        <option value={'Polygender'}>Polygender</option>
                        <option value={'Non-binary'}>Non-binary</option>
                        <option value={'Genderfluid'}>Genderfluid</option>
                        <option value={'Genderqueer'}>Genderqueer</option>
                    </select>
                </fieldset>
                <fieldset className='py-2'>
                    <label>Availebility</label>
                    <select name='available' className="select select-bordered w-full max-w-md">
                        <option value={true}> Available</option>
                        <option value={false}>Unavailable</option>
                    </select>
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