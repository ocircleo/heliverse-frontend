import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/dataSlice/userSlice';
import { getGroup } from '../../features/dataSlice/groupSlice';

const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    const { user_data } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const loginU = (e) => {
        e.preventDefault()
        let form = e.target;
        let email, password;
        email = form.email.value;
        password = form.password.value;
        const body = { email: email, password: password }
        dispatch(loginUser(body))
        console.log("clicking")
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (user_data.email) {
            console.log("navigat")
            dispatch(getGroup(user_data.email))
            navigate('/')
        }
    }, [user_data])
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center'>

                <form onSubmit={loginU} className='border-2 p-3 w-full md:w-96 flex flex-col rounded'>
                    <h2 className='text-center font-semibold text-2xl py-2'>Please login</h2>
                    <fieldset className='py-2'>
                        <label>Enter Email</label>
                        <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-md" required />
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
                    <button className='btn bg-gray-300 hover:bg-indigo-400 hover:text-white font-semibold'>Login</button>
                    <Link to={'/register'} className='text-sm underline text-indigo-400 py-2 text-center'>Dont have an acoutn? Register...!</Link>
                    <Link to={'/'} className='text-sm underline text-indigo-400  text-center'>Go Back To Home</Link>
                </form>
            </div>
        </>

    );
};

export default Login;