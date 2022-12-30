import React from 'react'
import { HashLoader } from 'react-spinners'

function Spinner() {
    return (
        <div>
            <div className='text-center loader'>
                <HashLoader size={50} color='#865aff' loading />
            </div>
        </div>
    )
}

export default Spinner;