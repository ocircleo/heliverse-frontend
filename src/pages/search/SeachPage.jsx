import React, { useEffect } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deselctAll, fetchUser } from '../../features/dataSlice/dataSlice';
import { fetchCount } from '../../features/dataSlice/countSlice';
import Navigation from '../../components/navigation/Navigation';
import Loading from '../../components/loading/Loading';
import { updateQuery } from '../../features/dataSlice/querySlice';


const SeachPage = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(state => state.dataReducer)
    const { count } = useSelector(state => state.countReducer)
    const reseteSelection = () => {
        dispatch(deselctAll())
    }
    const query = { domain: 'null', gender: "null", available: 'null', text: "null", page: 1 }
    const reseteForm = () => {
        document.getElementById('form').reset()
        dispatch(updateQuery({ domain: "null", gender: "null", available: "null", text: "null" }))
        dispatch(fetchUser(query))
    }
    useEffect(() => {
        dispatch(fetchCount())
        dispatch(fetchUser(query))
    }, [])
    return (
        <div className='h-auto overflow-y-auto flex flex-col '>
            <SearchBar></SearchBar>
            <div className='px-4 py-2 flex gap-2 flex-wrap'>
                <button className="btn bg-gray-300 text-black border-transparent" onClick={() => document.getElementById('my_modal_3').showModal()}>Add selection to group</button>
                <button className="btn bg-gray-300 text-black border-transparent" onClick={reseteSelection}> Reset All Selection</button>
                <button className="btn bg-gray-300 text-black border-transparent" onClick={reseteForm}> Reset Form</button>

            </div>
            <Modal></Modal>
            {
                isLoading ? <Loading></Loading> : data.length == 0 ? <div className='h-36 w-full flex items-center justify-center'><h2 className='text-xl font-semibold'>No data available</h2></div> : <div className='grid grid-cols-1 min-[510px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-5 gap-2'>

                    {
                        data?.map(ele => <Card key={ele._id} data={ele}></Card>)
                    }
                </div>
            }

            <div className='flex items-center justify-center my-2 w-full'>
                <div className="join">
                    {
                        [...new Array(Math.floor(count / 20)).keys()].map(ele => <Navigation key={ele} page={ele}></Navigation>)
                    }
                </div>
            </div>
            <div className='h-14 w-full bg-slate-200'></div>
        </div>
    );
};

export default SeachPage;