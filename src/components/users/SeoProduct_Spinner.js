import React from 'react'
import { HashLoader } from 'react-spinners'

const SeoProduct_Spinner = () => {
    return (
        <div>
            <div className='text-center loader-seoproduct'>
                <HashLoader size={50} color='#865aff' loading />
            </div>
        </div>
    )
}

export default SeoProduct_Spinner