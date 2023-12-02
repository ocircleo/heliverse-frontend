import React from 'react';

const CreateGroupModal = () => {
    const createGroup = (e) => {
        e.preventDefault()
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
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <p>Group Domain</p>
                    <select className="select select-bordered w-full mb-5">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <button type='submit' className='btn bg-gray-300'>Create group</button>
                </form>
            </div>
        </dialog >
    );
};

export default CreateGroupModal;