import React from 'react';
import Acordian from '../../components/acordian/Acordian';
import CreateGroupModal from '../../components/createGroupModal/CreateGroupModal';

const Groups = () => {
    let teams = [0, 1, 2, 3, 4]
    return (
        <div className='p-4'>
            <p className='text-xl font-semibold p-3 underline text-center underline-offset-2'>Groups You have created</p>
            <div className='flex flex-col gap-2'>

                {
                    teams.map(ele => <Acordian></Acordian>)
                }

            </div>
            <div>
                <div className='py-4 flex justify-center'>
                    <button button className="btn bg-gray-300" onClick={() => document.getElementById('createGroup').showModal()}> Create Group</button >
                </div>
            </div>
            <CreateGroupModal></CreateGroupModal>

        </div>
    );
};

export default Groups;