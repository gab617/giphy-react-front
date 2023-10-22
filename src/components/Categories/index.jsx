import { useEffect, useState } from "react"
import { useGifs } from "../../hooks/useGifs"
import { Link } from "wouter"
import './Categories.css'

export function Categories() {

    const { categories } = useGifs()
    console.log(categories)
    const [currentCategorie, setCurrentCategorie] = useState('')
    const [subCategories, setSubCatgs] = useState([])
    const [hoverColor, setHoverColor] = useState(null);

    const colors = ['#9300FF', '#DC00FF', '#6800FF', '#C733FF', '#6800FF'];

    function colorRandom (){
        return (colors[Math.floor(Math.random() * colors.length)])
    }

    function onClickListCategories(name) {
        console.log(name)
        setCurrentCategorie(name)
        const subCatgs = categories.find(cat => cat.name == name)
        setSubCatgs(subCatgs.subcategories)
    }

    useEffect(() => {
        setCurrentCategorie(categories[0]?.name)
        setSubCatgs(categories[0]?.subcategories)
    }, [categories])

    return (
        <div id="Categories">
            <div id="categories-content">
                <div>
                    <ul id="categories">
                        <h2>Categories</h2>
                        {categories && categories.map(cat => (
                            <li
                                onClick={() => onClickListCategories(cat.name)}
                                key={cat.name}>
                                <p>{cat.name}</p>
                                {/* <img src={cat.url} alt="" /> */}
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div id="subCategories">
                    <h1>{currentCategorie}</h1>

                    <ul>
                        {
                            subCategories && subCategories.map(subCat => {
                                const randomColor = colorRandom()
                                
                               return( <>
                                    <Link to={`/search/${subCat.name}`}
                                    >

                                        <li
                                        style={ {backgroundColor: randomColor} }
                                        >
                                            <div id="subcateg-container">
                                                <h2>{subCat.name}</h2>
                                            </div>

                                        </li>
                                    </Link>
                                </>)
                            }
                            )}

                    </ul>
                </div>
            </div>
        </div>
    )
}