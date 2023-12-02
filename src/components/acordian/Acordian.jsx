import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
const Acordian = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-gray-200 p-2 md:p-5 h-auto duration-300'>
            <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer select-none'>
                <p className='text-xl'>Random Group</p>
                <RiArrowDropDownLine className={`text-4xl ${open ? "rotate-180" : "rotate-0"} duration-200`} />
            </div>
            <div className={`${open ? "block" : "hidden"} duration-200`}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius unde ad dolorem, cumque maxime sit veniam voluptates iste consequatur, dignissimos ducimus. Quibusdam dolorem iure laborum quos in perferendis placeat ad.
                </p>
                <button className='btn btn-error'>Delete Group</button>
            </div>

        </div>
    );
};

export default Acordian;