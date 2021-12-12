import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

export default function Home() {

    const { currentUser } = useContext(UserContext)

    return (
        <div className="container p-5">
            <h1 className="display-2 text-light ">Home</h1>
            {currentUser ? <h2 className='text-light' >Hello Buddy!</h2> : <h2 className='text-light'>Hello, Stranger! Sign up or Sign in</h2>}

        </div>
    )
}

