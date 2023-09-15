import React from 'react'
import Gif from '../Gif'
import './styles.css'
/* Renderizado de Componentes Gif */
function ListOfGifs({ gifs }) {
    console.log(gifs)

    return (
        <div className='list-gifs'>
            {gifs.map(({ id, title, url }) => {//se obtienen esas propidedaes de cada objeto gif
                return <Gif
                    key={id}
                    title={title}
                    id={id}
                    url={url} />
            })}
        </div>
    )
}

export default ListOfGifs