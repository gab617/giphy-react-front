
import { useState, useEffect } from 'react'
import { getCategories, getGifs, getGifsTrending } from '../services/getGifs'
/* LocalStorage utilizado para guardar la ultima keyword utilizada si existiese
primera vez sera nulo, una vez guardado el dato en el localstorage
a menos que sea reiniciada la app po codigo fuente o se borre el localstorage 
tendra el ultimo string utilizado para hacer una busqueda*/
/* HOOK utilizado para recibir los datos de los gifs que solo necesita renderizar
en este caso definido en 50 gifs, con las caracteristicas filtradas por necesidad
de los componentes. */
/* Hook en funcionamento en paralelo con los componentes renderizandose a lo largo del
funcionamiento de la app */

export function useGifs({ keyword } = { keyword: null }) {
    

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    const [gifsDivided, setGifsChunks] = useState([])
    const [gifsTrending, setGifsTrending] = useState([])
    const [categories, setCategories] = useState([])

    function splitArrayInChunks(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }


    /* Me trae los links de categoria trending en partes de a 5 en este caso para mostrar de a 7 elementos */
    useEffect(() => {
        console.log('TRENDING LOAD')

        getGifsTrending()
            .then(gifs => {
                const gifsChunks = []
                for (let i = 0; i < gifs.length; i += 6) {
                    gifsChunks.push(gifs.slice(i, i + 6));
                }
                setGifsTrending(gifsChunks) /* Gifs Trending */
            })
    }, [])

    useEffect(() => {
        getCategories()
            .then(categs => setCategories(categs))
    },[])

    useEffect(() => {
        setLoading(true)
        //recupera keyword de localstorage si recibe null y en local storage no hay nada guardado entonces se solicitara en la peticion null, la api devolvera lo solicitado si el parametro recibido es null
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') /* || 'messi' */

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setGifsChunks(splitArrayInChunks(gifs,12))
                setLoading(false)
                //guarda ultima keyword en localstorge
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword]) //efecto cada vez que keyword es modificado


    return { loading, gifs, gifsTrending, categories, gifsDivided }
}
