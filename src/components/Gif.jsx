import React, { useState } from 'react'
import './Gif.css'

/* Renderizado de un gif */
function Gif({ title, url, id, className = "" }) {

    const [loading, setLoading] = useState(true);

    const handleImageLoaded = () => {
        setLoading(false);
    };



    return (
        <a href={`#${id}`} className={` fade-in`}>{/* Gif */}
            <img className={`w-full h-auto`} alt={title} src={url} 
             />
        </a>
    )
}

export default Gif