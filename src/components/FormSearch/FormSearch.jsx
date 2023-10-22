import { Link } from "wouter";
import './FormSearch.css'

export function FormSearch({POPULAR_GIFS, handleSubmit, handleChange, keyword }) {
    return (
        <>
              <div id='search-home'>
                <form className='formHome' onSubmit={handleSubmit}>
                    <input
                        placeholder='Search a gif here...'
                        className='inputSearch' onChange={handleChange}
                        type="text" value={keyword} />
                    <button className="btn1">Go!</button>
                </form>

                <h3 className="App-title">Gifs mas populares</h3>
                <ul>
                    {POPULAR_GIFS.map((porpularGif) => (
                        <li className='link-popular-gif' key={porpularGif}>
                            <Link to={`/search/${porpularGif}`}>Gifs de {porpularGif}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}