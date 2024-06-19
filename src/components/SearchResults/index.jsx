import React from 'react'
import ListOfGifs from '../ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import './loader.css'

function SearchResults({params}) {
    const { keyword } = params //params con Route-wouter con contenido de keyword
    const { loading,gifs } = useGifs({keyword})

    if (loading) return <div className='w-16 h-16 loader'></div>
    /* Se renderiza la lista de gifs mediante el componente ListOfGifs */
    return (
        <div className=''>
            <ListOfGifs gifs={gifs}></ListOfGifs>
        </div>
    )
}

export default SearchResults