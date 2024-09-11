import React from 'react'
import Gif from '../Gif'
import './LastSearch.css'
import ListOfGifs from '../ListOfGifs/ListOfGifs'


function LastSearch({ gifsDivided }) {
    console.log('Renderiza UltimaBusqueda: ', gifsDivided)
    return (
        <div className="flex">
        {gifsDivided &&
          gifsDivided.map((gifChunk) => {
            return (
              <>
                <ListOfGifs gifs={gifChunk}></ListOfGifs>
              </>
            );
          })}
      </div>
    )
}

export default LastSearch