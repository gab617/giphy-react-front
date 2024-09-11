import React from "react";
import Gif from "../Gif";
import "./LastSearch.css";
import ListOfGifs from "../ListOfGifs/ListOfGifs";

function LastSearch({ gifsDivided }) {
  console.log("Renderiza UltimaBusqueda: ", gifsDivided);
  return (
    <div>
      <div className="flex items-center ml-1">
        <svg
          fill="white"
          viewBox="0 0 16 16"
          strokeWidth={2}

          height="1.5em"
          width="1.5em"
        >
          <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
        </svg>
        <h1 className="text-3xl p-2">Última Búsqueda</h1>
      </div>
      <div className="flex gap-1">
        {gifsDivided &&
          gifsDivided.map((gifChunk) => {
            return (
              <>
                <ListOfGifs gifs={gifChunk}></ListOfGifs>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default LastSearch;
