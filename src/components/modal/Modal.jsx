import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Modal = () => {
    const { totalSelected, selected } = useSelector(state => state.dataReducer)
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Add selection to group</h3>
                <p className=" text-sm">Total selected {totalSelected}</p>
                <div className='flex flex-col items-stretch  gap-2 max-h-44 overflow-y-scroll'>


                </div>

            </div>
        </dialog>
    );
};

export default Modal;