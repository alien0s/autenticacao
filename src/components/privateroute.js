import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({props}) => {
    const isLogged = !!sessionStorage.getItem('token')
    return isLogged ? <Outlet {...props} /> : <Navigate to="/"/>
}

export default PrivateRoute