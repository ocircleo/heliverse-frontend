import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeGroup } from '../../features/dataSlice/groupSlice';

const CreateGroupModal = () => {
    const dispatch = useDispatch()
    const { user_data } = useSelector(state => state.userReducer)
    const createGroup = (e) => {
        e.preventDefault()
        const body = {
            group_name: e.target.name.value,
            group_admin_email: user_data.email,
            group_admin_name: user_data.first_name,
            members: []
        }
        dispatch(makeGroup(body))
        document.getElementById('closeNewGroupModal').click()
    }
    return (

        <dialog id="createGroup" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button id='closeNewGroupModal' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Create Group</h3>
                <form onSubmit={createGroup} className='flex flex-col gap-2'>
                    <p>Group Name</p>
                    <input type="text" name='name' required placeholder="Type here" className="input input-bordered w-full " />

                    <button type='submit' className='btn bg-gray-300'>Create group</button>
                </form>
            </div>
        </dialog >
    );
};

export default CreateGroupModal;