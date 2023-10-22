import { useState, useEffect } from "react";
import Gif from "../Gif";



export function Trending({ gifsTrending, loading }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousGif = () => {
        let newIndex = currentIndex === 0 ? gifsTrending.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    };

    /* verifica si currentIndex es el final del array, si lo es, el nuevo indice va a ser cero, si no, se le suma uno ya 
    que se sigue navegando dentro de los limites del arry  
    *arma un primer slice con currentIndex y toma los siguientes 5 elementos
    *remaininCount verifica si el primer slice tiene 5 elementos, en este caso la cantidad que queremos mostrar
    si es menor a 5, quiere decir que tomo elementos hasta toparse con el final del array por que a partir del principio
    o sea desde el indice cero, toma los elementos que faltan para completar los 5 elementos deseados.[...firstSlice, ...secondSlice] */

    const nextGif = () => {
        let newIndex = currentIndex === gifsTrending.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    };

    return (
        <div id="Trending">
            {
                <div id="trending-cont" className="fade-in" >
                    {
                        gifsTrending[currentIndex] && gifsTrending[currentIndex].map(gif => {
                            return (
                                <Gif
                                    key={gif.id}
                                    className={"fade-in"}
                                    title={gif.title}
                                    id={gif.id}
                                    url={gif.url}
                                />
                            )
                        })
                    }

                </div>
            }
            <div className="carousel">
                <button className="btn1" onClick={previousGif}>Anterior</button>
                <button className="btn1" onClick={nextGif}>Siguiente</button>
            </div>
        </div>
    )
}