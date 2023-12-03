import React, { useEffect } from 'react';
import Acordian from '../../components/acordian/Acordian';
import CreateGroupModal from '../../components/createGroupModal/CreateGroupModal';
import { useSelector } from 'react-redux';


const Groups = () => {
    const { groups } = useSelector(state => state.groupReducer)
    return (
        <div className='p-4'>
            <p className='text-xl font-semibold p-3 underline text-center underline-offset-2'>Groups You have created</p>
            <div className='flex flex-col gap-2'>

                {
                    groups?.map(ele => <Acordian data={ele}></Acordian>)
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