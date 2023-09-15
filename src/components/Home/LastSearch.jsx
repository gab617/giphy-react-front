import React from 'react'
import Gif from '../Gif'
import './LastSearch.css'
import ListOfGifs from '../ListOfGifs/ListOfGifs'


function LastSearch({ gifs }) {
    console.log('Renderiza UltimaBusqueda: ', gifs)
    return (
        <div id='LastSearch'>
            <h3 className='last-search-h3'>Ultima busqueda</h3>
            <ListOfGifs gifs={gifs}></ListOfGifs>
            {/* se podrian editar los estilos de la lista de gifs en la home, pero por ahora se recicla el que ya esta creado */}
{/*             <div className='gifsHome'>
                {gifs.map(({ id, title, url }) => {//se obtienen esas propidedaes de cada objeto gif
                    return <Gif
                        key={id}
                        title={title}
                        id={id}
                        url={url} />
                })}
            </div> */}
        </div>
    )
}

export default LastSearch