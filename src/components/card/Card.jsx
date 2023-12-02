import React, { useEffect, useState } from 'react';
import profile from '/profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { deselct, select } from '../../features/dataSlice/dataSlice';
const Card = ({ data }) => {
    const [alSelected, setAlSelected] = useState(false)
    const { available, avatar, domain, email, first_name, last_name, gender, _id } = data
    const { selected, totalSelected } = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
    const addToGroup = () => {
        if (selected[_id]) {
            dispatch(deselct(_id))
        } else {
            dispatch(select(_id))
        }
    }
    useEffect(() => {
        if (selected[_id]) {
            setAlSelected(true)
        } else {
            setAlSelected(false)
        }
    }, [totalSelected])
    return (
        <div className='col-sapn-1 w-full flex items-center flex-col bg-gray-200 rounded py-5 px-3 relative overflow-clip'>
            <p className={`absolute top-1 right-2  px-2 font-semibold capitalize rounded text-xs text-white ${available ? "bg-indigo-400" : "bg-red-500"}`} >{available ? "available" : 'Unavailable'}</p>
            <img src={avatar || profile} alt="" className='h-20 w-20 rounded-full' />
            <p className='capitalize font-semibold'>{first_name} {last_name}</p>
            <p className='bg-gray-300 px-2 rounded overflow-clip'>{email}</p>
            <p className='font-semibold'>Domain: {domain}</p>
            <p className='font-semibold' >Gender: {gender}</p>

            <button onClick={addToGroup} className={` btn select-none  self-stretch  capitalize font-semibold py-1 ${alSelected ? " bg-indigo-400" : !available ? "btn-disabled bg-red-500" : "bg-gray-400"}`}>{alSelected ? "Selceted" : "Select"}</button>



        </div>
    );
};

export default Card;