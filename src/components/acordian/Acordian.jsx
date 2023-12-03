import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
const Acordian = ({ data }) => {
    let { group_name, group_admin_email, group_admin_name, members } = data
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-gray-200 p-2 md:p-5 h-auto duration-300 font-semibold'>
            <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer select-none'>
                <h3 className='text-xl '>Group: {group_name}</h3>
                <RiArrowDropDownLine className={`text-4xl ${open ? "rotate-180" : "rotate-0"} duration-200`} />
            </div>
            <div className={`${open ? "block" : "hidden"} duration-200`}>

                <p>group admin: {group_admin_name}</p>
                <p>group admin email: {group_admin_email}</p>
                <p>total members : {members.length + 1}</p>

            </div>

        </div>
    );
};

export default Acordian;