import { useEffect, useState } from "react";
import { useGifs } from "../../hooks/useGifs";
import { Link } from "wouter";
import "./Categories.css";

export function Categories() {
  const { categories } = useGifs();
  console.log(categories);
  const [currentCategorie, setCurrentCategorie] = useState("");
  const [subCategories, setSubCatgs] = useState([]);
  const [hoverColor, setHoverColor] = useState(null);

  const colors = ["#9300FF", "#DC00FF", "#6800FF", "#C733FF", "#6800FF"];

  function colorRandom() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function onClickListCategories(name) {
    console.log(name);
    setCurrentCategorie(name);
    const subCatgs = categories.find((cat) => cat.name == name);
    setSubCatgs(subCatgs.subcategories);
  }

  useEffect(() => {
    setCurrentCategorie(categories[0]?.name);
    setSubCatgs(categories[0]?.subcategories);
  }, [categories]);

  return (
    <div className="md:text-2xl" id="Categories">
      <h1 className="text-white ml-2">
        Seleccionar categoria y sub-categoria para confirmar elección
      </h1>
      <h2 className="text-white ml-2 font-bold">Categorias:</h2>
      <div className="" id="UlCategories">
        {/* categories-content */}
        <div>
          <ul
            className="grid grid-cols-3 gap-1 text-center items-center w-95 m-auto mt-2 mb-2"
            id=""
          >
            {/* categories */}
            {categories &&
              categories.map((cat) => (
                <li
                  className="h-full flex justify-center items-center cursor-pointer"
                  onClick={() => onClickListCategories(cat.name)}
                  key={cat.name}
                >
                  <p className="font-bold">{cat.name}</p>
                  {/* <img src={cat.url} alt="" /> */}
                </li>
              ))}
          </ul>
        </div>
        <div id="">
          {/* subCategories */}
          <div className="text-white ml-2">
            <h2 className="text-white ml-2 font-bold">
              Sub-Categorias de <span className="text-yellow-400">{currentCategorie}</span>
            </h2>
          </div>

          <ul className="grid grid-cols-3">
            {subCategories &&
              subCategories.map((subCat) => {
                const randomColor = colorRandom();

                return (
                  <>
                    <Link to={`/search/${subCat.name}`}>
                      <li style={{ backgroundColor: randomColor }}>
                        <div
                          className="text-center font-bold cursor-pointer"
                          id=""
                        >
                          <h2>{subCat.name}</h2>
                        </div>
                      </li>
                    </Link>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
