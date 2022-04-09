import React from 'react'

const GifGridItem = ({ id, title, url }) => {

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12 p-2'>
            <div className='card animate__animated animate__fadeInLeft'>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    )
}

export default GifGridItem