import { useState } from "react";

export function Trending({ gifsTrending }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleGifs, setvisibleGifs] = useState(gifsTrending)

    const previousGif = (visGifs) => {
        let newIndex = currentIndex === 0 ? visGifs.length - 1 : currentIndex - 1
        console.log(currentIndex)
        setCurrentIndex(newIndex);
        setvisibleGifs(gifsTrending.slice(currentIndex, currentIndex + 5))
    };

    const nextGif = (visGifs) => {
        console.log(visGifs)
        let newIndex = currentIndex === visGifs.length - 1 ? 0 : currentIndex + 1
        console.log(currentIndex)
        setCurrentIndex(newIndex);
        setvisibleGifs(gifsTrending.slice(currentIndex, currentIndex + 5))
    };

    // Componente para el carrusel
    function Carousel() {
        return (
            <div className="carousel">
                <button onClick={previousGif}>Anterior</button>
                <button onClick={nextGif}>Siguiente</button>
            </div>
        );
    }

    return (
        <div id="Trending">
            <ul>
                {
                    visibleGifs.map(gif => (
                        <li key={gif.id}>
                            <img src={gif.url} alt="" />
                        </li>
                    ))
                }
            </ul>
            <div className="carousel">
                <button onClick={() => previousGif(gifsTrending)}>Anterior</button>
                <button onClick={() => nextGif(gifsTrending)}>Siguiente</button>
            </div>

        </div>
    )
}