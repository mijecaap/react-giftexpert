import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])

    return (
        <div className='card mb-4 animate__animated animate__fadeInLeft'>
            <h3 className='ps-2 pt-2'>{category}</h3>

            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className='row m-0 p-0 w-100'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default GifGrid