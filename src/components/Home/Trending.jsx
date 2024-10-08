import { useState, useEffect } from "react";
import Gif from "../Gif";



export function Trending({ gifsTrending, loading }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const bgs = ["yellow","blue","pink","red","purple"]

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
        <div className="m-auto" id="">{/* Trending */}
            {
                <div id="" /* trending-cont */
                    className=" 
                        fade-in
                        grid
                        grid-cols-2
                        gap-1
                        md:grid-cols-3
                        lg:grid-cols-6
                        lg:w-80
                        lg:mx-auto
                    " >
                    {
                        gifsTrending[currentIndex] && gifsTrending[currentIndex].map(gif => {
                            const randomBg = bgs[Math.floor(Math.random() * bgs.length)];
                            return (
                                <div className={`flex flex-col justify-center lg:bg-opacity-60 lg:rounded-lg`}
                                style={
                                    {
                                        backgroundColor: randomBg
                                    }
                                } 
                                >
                                    <Gif
                                        key={gif.id}
                                        className={"fade-in"}
                                        title={gif.title}
                                        id={gif.id}
                                        url={gif.url}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
            }
            <div className="w-full m-1 text-center p-1">
                <button className="btn-popular" onClick={previousGif}>Anterior</button>
                <button className="btn-popular" onClick={nextGif}>Siguiente</button>
            </div>
        </div>
    )
}