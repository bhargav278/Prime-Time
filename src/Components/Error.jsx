import React from 'react'
import Navbar from './Navbar'

function Error() {
    return (<>
        <Navbar />
        <div className='h-screen w-screen flex justify-center items-center text-white text-3xl'>
            Something went Wrong!
        </div>
    </>
    )
}

export default Error
