import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user_data } = useSelector(state => state.userReducer)
    const navigate = useNavigate()
    if (user_data.email) {
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;