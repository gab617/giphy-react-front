import React from 'react'
import Gif from '../Gif'
import './styles.css'
/* Renderizado de Componentes Gif */
function ListOfGifs({ gifs }) {
    console.log(gifs)


    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {gifs.map(({ id, title, url }) => {//se obtienen esas propidedaes de cada objeto gif
                
                
                return (
                    <div className='p-1'>
                        <Gif
                            key={id}
                            title={title}
                            id={id}
                            url={url}
                        />
                    </div>)

            })}
        </div>
    )
}

export default ListOfGifs