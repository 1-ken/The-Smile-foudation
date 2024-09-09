import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {useAuthstatus} from '../hooks/useAuthstatus';

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthstatus();
    if(checkingStatus){
        return <h3>Loading........</h3>
    }
  return loggedIn ? <Outlet/> : <Navigate to = "/sign-in"/>;
}
