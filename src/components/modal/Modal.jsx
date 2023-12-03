import React from 'react';
import { useSelector } from 'react-redux';
import AddToGroup from '../addtogroup/AddToGroup';
import { Link } from 'react-router-dom';
const Modal = () => {
    const { totalSelected, selected } = useSelector(state => state.dataReducer)
    const { user_data } = useSelector(state => state.userReducer)
    const { groups } = useSelector(state => state.groupReducer)
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " id='yolo'>✕</button>
                </form>
                <h3 className="font-bold text-lg">Add selection to group</h3>
                <p className=" text-sm">Total selected {totalSelected}</p>
                <div className='flex flex-col items-stretch  gap-2 max-h-44 overflow-y-scroll'>
                    {
                        user_data?.email ? <div>
                            {
                                groups?.map(ele => <AddToGroup key={ele._id} data={ele}></AddToGroup>)
                            }
                        </div> : <div className='flex items-center justify-center w-full flex-col'>
                            <p>Please login</p>
                            <Link className='px-5 py-2 rounded text-md bg-indigo-400 font-bold text-white active:scale-95 duration-100' to={'/login'}>Login</Link>
                        </div>
                    }

                </div>

            </div>
        </dialog>
    );
};

export default Modal;