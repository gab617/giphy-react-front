import { useState } from "react"
import './Artists.css'

export function Artists({ artists }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(artists)

    const previousArtists = () => {
        let newIndex = currentIndex === 0 ? artists.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    };

    /* verifica si currentIndex es el final del array, si lo es, el nuevo indice va a ser cero, si no, se le suma uno ya 
    que se sigue navegando dentro de los limites del arry  
    *arma un primer slice con currentIndex y toma los siguientes 5 elementos
    *remaininCount verifica si el primer slice tiene 5 elementos, en este caso la cantidad que queremos mostrar
    si es menor a 5, quiere decir que tomo elementos hasta toparse con el final del array por que a partir del principio
    o sea desde el indice cero, toma los elementos que faltan para completar los 5 elementos deseados.[...firstSlice, ...secondSlice] */

    const nextArtists = () => {
        let newIndex = currentIndex === artists.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    return (
        <div id="Artists">
            <div id="artists-cont" className="fade-in">
                {
                    artists[currentIndex] && artists[currentIndex].map(artist => (
                        <div className='artists-view'>
                            <img src={artist.url} alt="" />
                            <div className="artist-data">
                                <h1>{artist.display_name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="carousel">
                <button onClick={previousArtists}>Anterior</button>
                <button onClick={nextArtists}>Siguiente</button>
            </div>


        </div>
    )
}