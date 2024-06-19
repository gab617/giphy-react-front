import { Link } from "wouter";
import './FormSearch.css'

export function FormSearch({ POPULAR_GIFS, handleSubmit, handleChange, keyword }) {
    return (
        <>
            <div className="mb-3" id=''>{/* search-home */}
                <form className='mt-2 flex justify-center'/* formHome */ onSubmit={handleSubmit}>
                    <input
                        placeholder='Search a gif here...'
                        className='p-2' onChange={handleChange}
                        type="text" value={keyword} />
                    <button className="bg-violet-700 bg-opacity-70 p-2 ">Go!</button>
                </form>

                <h3 className="mt-2 mb-2 text-xl text-center">Gifs populares</h3>
                <ul className="
                    grid grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-flow-col
                    lg:w-80
                    lg:m-auto
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
                                bg-[#6d4ae963] border-2 
                                border-[#3e3e3e] rounded-lg 
                                text-white 
                                px-3 py-2 
                                hover:border-[#fff] 
                                cursor-pointer transition
                                w-full
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