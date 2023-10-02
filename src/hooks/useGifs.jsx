
import { useState, useEffect } from 'react'
import { getGifs, getGifsTrending } from '../services/getGifs'
/* LocalStorage utilizado para guardar la ultima keyword utilizada si existiese
primera vez sera nulo, una vez guardado el dato en el localstorage
a menos que sea reiniciada la app po codigo fuente o se borre el localstorage 
tendra el ultimo string utilizado para hacer una busqueda*/
/* HOOK utilizado para recibir los datos de los gifs que solo necesita renderizar
en este caso definido en 10 gifs, con las caracteristicas filtradas por necesidad
de los componentes. */
/* Hook en funcionamento en paralelo con los componentes renderizandose a lo largo del
funcionamiento de la app */

export function useGifs({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    const [gifsTrending, setGifsTrending] = useState([])

    useEffect(() => {
        console.log('TRENDING LOAD')

        getGifsTrending()
            .then(gifs => {
                setGifsTrending(gifs)
            })
    }, [])

    useEffect(() => {
        console.log('EFECTO DEL HOOK: ', keyword, { keyword })
        setLoading(true)
        //recupera keyword de localstorage si recibe null y en local storage no hay nada guardado entonces se solicitara en la peticion null, la api devolvera lo solicitado si el parametro recibido es null
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') /* || 'messi' */
        console.log('KeyWord Principal: ', keyword)

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guarda ultima keyword en localstorge
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword]) //efecto cada vez que keyword es modificado

    return { loading, gifs, gifsTrending }
}
