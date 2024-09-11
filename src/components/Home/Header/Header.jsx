import { Link } from "wouter";
import './Header.css'
export function Header() {

    return (
        <>
            <div className="flex justify-center w-full text-center p-2 sticky top-0 z-50 bg-black bg-opacity-50" id="">

                <Link to="/">
                    <button className="btn-popular"
>                          Home
                    </button>
                </Link>

                <Link to='/categories'>
                    <button className="btn-popular"
>                       Categorías
                    </button>
                </Link>

            </div>
        </>
    )
}