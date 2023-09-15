import React from 'react'
import './Gif.css'

/* Renderizado de un gif */
function Gif({title, url, id}) {
    return (
        <a href={`#${id}`} className='Gif'>
            <img alt={title} src={url} />
{/*             <h4>{title}</h4>
            <small>{id}</small> */}
        </a>
    )
}

export default Gif