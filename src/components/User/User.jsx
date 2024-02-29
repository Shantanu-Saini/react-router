import React from 'react'
import { useParams } from "react-router-dom";

const User = () => {

    const {userid} = useParams();
    return (
        <>
            <div className='text-center py-4 bg-slate-600 text-white h-screen'>
                <h1>User: {userid}</h1>
            </div>
        </>
    )
}

export default User