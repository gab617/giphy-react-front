import { Link } from "wouter";
import './Header.css'
export function Header() {

    return (
        <>
            <div id="Header">
                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to='/categories'>
                    <button>Categories</button>
                </Link>
            </div>
        </>
    )
}