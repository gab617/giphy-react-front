import { useEffect, useState } from "react"
import { useGifs } from "../../hooks/useGifs"
import { Link } from "wouter"
import './Categories.css'

export function Categories() {

    const { categories } = useGifs()
    console.log(categories)
    const [currentCategorie, setCurrentCategorie] = useState('')
    const [subCategories, setSubCatgs] = useState([])

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

            <div>
                <ul id="categories">
                    <h2>Categories</h2>
                    {categories && categories.map(cat => (
                        <li
                            onClick={() => onClickListCategories(cat.name)}
                            key={cat.name}>
                            <p>{cat.name}</p>
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div id="subCategories">
                <h1>{currentCategorie}</h1>

                <ul>
                    {
                        subCategories && subCategories.map(subCat => (
                            <>
                                <li>
                                    <div>
                                        <Link to={`/search/${subCat.name}`}>
                                            <h2>{subCat.name}</h2>
                                        </Link>
                                    </div>
                                </li>
                            </>
                        )
                        )}

                </ul>
            </div>
        </div>
    )
}