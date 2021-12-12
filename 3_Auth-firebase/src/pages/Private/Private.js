import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { Outlet, useLocation, Navigate } from 'react-router-dom'

export default function Private() {
    const { currentUser } = useContext(UserContext)

    return (
        <div>
            <h1 className='text-light'>hello from /private</h1>
            <Outlet />
        </div>
    )
}
