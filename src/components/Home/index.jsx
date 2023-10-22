import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import Gif from '../Gif'
import LastSearch from './LastSearch'
import './style.css'
import './Trending.css'
import { Trending } from './Trending'
import { FormSearch } from '../FormSearch/FormSearch'


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



    return (
        <div className='Home'>
            <FormSearch
                POPULAR_GIFS={POPULAR_GIFS}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                keyword={keyword}
            />

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