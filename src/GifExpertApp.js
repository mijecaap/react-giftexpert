import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => ['HunterXHunter', ...cats]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            {/* <button onClick={handleAdd} >Agregar</button> */}

            <div>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default GifExpertApp