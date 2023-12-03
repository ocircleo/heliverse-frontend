import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../components/loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user_data, user_loading } = useSelector(state => state.userReducer)
    if (user_loading) {
        return <Loading></Loading>
    }
    if (user_data.email) {
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;