import {Routes, Route} from 'react-router-dom'
import PrivateRoute from './components/privateroute'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import React from 'react'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<PrivateRoute/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path="*" element={<h1>eat sh!t</h1>}/>
        </Routes>
    )
}

export default Routers