import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../features/dataSlice/dataSlice';

const Test = () => {
    let data = 0;
    const dispatch = useDispatch()
    const datas = useSelector(state => state?.dataReducer)
    const click = () => {
        data = data + 1;
        console.log(data)
        dispatch(select(data))
        console.log(datas.selected)
    }
    return (
        <div>
            <button className='btn bg-gray-400' onClick={click}>test me</button>
            <p>{datas.count || 'ola'}</p>
        </div>
    );
};

export default Test;