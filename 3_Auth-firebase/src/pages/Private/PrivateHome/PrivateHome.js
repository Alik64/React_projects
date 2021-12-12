import React from 'react'
import dev from './dev.gif'

export default function PrivateHome() {
    return (
        <div className='container p-5'>
            <h1 className="display-3 text-light mb-4"> Home Private</h1>
            <img src={dev} alt="programmer" />
        </div>
    )
}
