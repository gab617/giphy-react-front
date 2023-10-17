import React from 'react'
import './Gif.css'

/* Renderizado de un gif */
function Gif({title, url, id, className=""}) {
    return (
        <a  href={`#${id}`} className={`Gif`}>
            <img alt={title} src={url}/>
        </a>
    )
}

export default Gif