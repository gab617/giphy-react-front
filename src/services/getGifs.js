/* Podria pasarlo a un servicio externo en un servidor. gefGifs */
/* La apiKey no deberia estar disponible en el cliente, 
esta tambien definida en el servidor */
const apiKey = "1BJzitRRvqnzYnkIDeWd5EsKfyfixQSm";/* APY KEY EXPUESTA, TENGO PROBLEMAS CON TOMAR LAS VARIABLES DE ENTORNO PARA ESTE PROYECTO. */

/* Servicio que: mediante una peticion fetch, recibe una promesa de la API de gifs
en formato json los datos de 10 gifs(definida cantidad en el url de la peticion)
me quedo con title, id, url asignando cada ojeto con esos tres datos, a un array 
retornandolo como gifs */

/* apiURLexpress cumple la misma funcion que apiURL con la diferencia
que esa url va directo a la app express que realice, desde ahi se envian los 
datos desde la api central de giphy, definidas en el servidor la cantidad
el filtrado puede hacerce en el cliente com asi mismo poder tener definiciones
echas en el servidor para que tambien se pueda pedir la cantidad deseada
desde el cliente, podria ser otro parametro enviado desde aca
para luego ser agregado a la url en el campo limit = -cantidad deseada de objetos- */



export function getGifs({ keyword }) { //por defecto array vacio o keyword
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=48&offset=0&rating=g&lang=en`
    const apiURLexpressRenderServices = `https://giphy617.onrender.com/obtenerDatos/${keyword}` /* Api almacenada en render.com */
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            /* console.log(data) */ //10gifs por defecto para mostrar al inicio
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.preview_gif
                return { title, id, url }
            })
            /*             console.log('GIFFS  ', gifs) */
            return gifs
        })
}

/* la cantidad debe ser multiplo de los gifs q se mestran en pantalla */

export function getGifsTrending() {
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30`
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.preview_gif
                return { title, id, url }
            })
            /*             console.log('TRENDING GIFS: ', gifs) */
            return gifs
        })
}


export function getCategories() {
    const apiUrl = `https://api.giphy.com/v1/gifs/categories?api_key=${apiKey}`
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const categories = data.map(categ => {
                const {name, name_encoded, subcategories} = categ
                const {url} = categ.gif.images.preview_gif
                return {name, name_encoded, url, subcategories}

            })
            return categories
        })
}

