import React, { useEffect } from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deselctAll, fetchUser } from '../../features/dataSlice/dataSlice';
import { fetchCount } from '../../features/dataSlice/countSlice';
import Navigation from '../../components/navigation/Navigation';
import Loading from '../../components/loading/Loading';


const SeachPage = () => {
    const dispatch = useDispatch()
    const { error, selected, data, isLoading, totalSelected } = useSelector(state => state.dataReducer)
    const { currentPage, count } = useSelector(state => state.countReducer)
    const reseteSelection = () => {
        dispatch(deselctAll())
    }
    useEffect(() => {
        dispatch(fetchCount())
    }, [])
    useEffect(() => {
        dispatch(fetchUser(currentPage))
    }, [])

    return (
        <div>
            <SearchBar></SearchBar>
            <div className='px-4 py-2 flex gap-2 flex-wrap'>
                <button className="btn bg-gray-300" onClick={() => document.getElementById('my_modal_3').showModal()}>Add selection to group</button>
                <button className="btn bg-gray-300" onClick={reseteSelection}> Reset All Selection</button>
            </div>
            <Modal></Modal>
            {
                isLoading ? <Loading></Loading> : <div className='grid grid-cols-1 min-[510px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-5 gap-2'>

                    {
                        data?.map(ele => <Card key={ele._id} data={ele}></Card>)
                    }
                </div>
            }

            <div className='flex items-center justify-center my-2'>

                <div className="join">
                    {
                        [...new Array(Math.floor(count / 20)).keys()].map(ele => <Navigation key={ele} page={ele}></Navigation>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SeachPage;