import { Link } from "wouter";
import './Header.css'
export function Header() {

    return (
        <>
            <div className="flex justify-evenly w-full text-center p-2 sticky top-0 z-50 bg-black bg-opacity-50" id="">

                <Link to="/">
                    <button className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
>                          Home
                    </button>
                </Link>

                <Link to='/categories'>
                    <button className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
>                       Categories
                    </button>
                </Link>
            </div>
        </>
    )
}