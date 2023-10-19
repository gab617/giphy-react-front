import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import Gif from '../Gif'
import LastSearch from './LastSearch'
import './style.css'
import './Trending.css'
import { Trending } from './Trending'


const POPULAR_GIFS = ['Messi', 'Matrix', 'Venezuela', 'Condorito', 'Power Rangers']

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation() //

    const { loading, gifs, gifsTrending } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(keyword)
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        evt.preventDefault()
        setKeyword(evt.target.value)
    }

    /* La HOME Renderiza lo que se le escribe en el buscador/input 
    mediante eventos onSubmit y onChange renderizan  asignando el pushLocation para 
    cambiar el link actual a search/ segudio de la keyword asi sea aignada 
    mediante el formulario o clickeada entre las opcionas ya definidas y listas para elegir
    */
    return (
        <div className='Home'>
            <div id='search-home'>
                <form className='formHome' onSubmit={handleSubmit}>
                    <input
                        placeholder='Search a gif here...'
                        className='inputSearch' onChange={handleChange}
                        type="text" value={keyword} />
                    <button>Go!</button>
                </form>

                <h3 className="App-title">Gifs mas populares</h3>
                <ul>
                    {POPULAR_GIFS.map((porpularGif) => (
                        <li className='link-popular-gif' key={porpularGif}>
                            <Link to={`/search/${porpularGif}`}>Gifs de {porpularGif}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='tr-home'>
                <h1>Trending</h1>
                <Trending
                    gifsTrending={gifsTrending}
                    loading={loading}
                />
            </div>




            <LastSearch
                gifs={gifs} />
        </div>
    )
}