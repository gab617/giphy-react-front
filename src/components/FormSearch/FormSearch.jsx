import { Link } from "wouter";
import './FormSearch.css'

export function FormSearch({ POPULAR_GIFS, handleSubmit, handleChange, keyword }) {
    return (
        <>
            <div className="mb-3" id=''>{/* search-home */}
                <form className='mt-2 flex justify-center'/* formHome */ onSubmit={handleSubmit}>
                    <input
                        placeholder='Search a gif here...'
                        className='p-3' onChange={handleChange}
                        type="text" value={keyword} />
                    <button className="bg-violet-700 bg-opacity-70 p-2 text-xl">Go!</button>
                </form>

                <h3 className="mt-2 mb-2 lg:text-3xl text-center text-white">Búsquedas populares</h3>
                <ul className="
                    grid grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-6
                    lg:w-90
                    lg:m-auto
                    xl:w-80
                    ">
                    
                    {POPULAR_GIFS.map((porpularGif) => (
                        <li
                            key={porpularGif}
                            className='
                                 w-full
                                 text-center
                                 p-1
                                 md:text-center
                                 
                        '>{/* link-popular-gif */}
                            <Link to={`/search/${porpularGif}`}>
                                <button className="
                                btn-popular
                                text-white 
                                px-3 py-2 
                                hover:border-[#fff] 
                                cursor-pointer transition
                                w-full
                                xl:text-xl                    
                                ">
                                    {porpularGif}

                                </button>


                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}