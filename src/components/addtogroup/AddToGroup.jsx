import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToGroup } from '../../features/dataSlice/groupSlice';

const AddToGroup = ({ data }) => {
    const { selected } = useSelector(state => state.dataReducer)
    const dispatch = useDispatch()
    const addtogroupx = () => {
        let newSelected = []
        for (let select in selected) {
            newSelected.push(select)
        }
        dispatch(addToGroup({ id: data._id, newmembers: newSelected }))
        document.getElementById('yolo').click()
    }
    return (
        <button onClick={addtogroupx} className='bg-gray-300 active:scale-95 duration-150 w-full py-2 my-1 rounded font-semibold capitalize'>
            {
                data.group_name
            }
        </button>
    );
};

export default AddToGroup;