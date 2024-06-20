import React from 'react'
import Gif from '../Gif'
import './LastSearch.css'
import ListOfGifs from '../ListOfGifs/ListOfGifs'


function LastSearch({ gifs }) {
    console.log('Renderiza UltimaBusqueda: ', gifs)
    return (
        <div className='bg-black bg-opacity-30 rounded-lg mt-2' id=''>
            <h3 className='mt-4 mb-4 text-2xl text-center'>Last search</h3>
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