import React, { useEffect, useState } from 'react';
import { togglePage } from '../../features/dataSlice/countSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../features/dataSlice/dataSlice';

const Navigation = ({ page }) => {
    const { currentPage, count } = useSelector(state => state.countReducer)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    page = page + 1
    useEffect(() => {
        if (currentPage + 1 == page || currentPage + 2 == page || currentPage - 1 == page || currentPage == page || Math.floor(count / 20) == page || Math.floor(count / 20) - 1 == page || Math.floor(count / 20) - 2 == page || page == 1 || page == 2) {
            setShow(true)
        } else {

            setShow(false)
        }
    }, [currentPage])
    const query = { domain: 'null', gender: "null", available: 'null', text: "null", page: page }
    const togglePageBtn = () => {
        dispatch(fetchUser(query))
        dispatch(togglePage(page))
    }


    return (
        <button className={`join-item btn  ${page == currentPage ? "btn-active" : ""} ${show ? "block" : "hidden"}`} onClick={togglePageBtn}>{page}</button>
    );
};

export default Navigation;