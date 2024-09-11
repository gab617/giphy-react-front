import React from "react";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import "./loader.css";

function SearchResults({ params }) {
  const { keyword } = params; //params con Route-wouter con contenido de keyword
  const { loading, gifs, gifsDivided } = useGifs({ keyword });

  if (loading) return <div className="w-16 h-16 loader"></div>;
  return (
    <div className="flex w-80 mx-auto">
      {gifsDivided &&
        gifsDivided.map((gifChunk) => {
          return (
            <>
              <ListOfGifs gifs={gifChunk}></ListOfGifs>
            </>
          );
        })}
    </div>
  );
}

export default SearchResults;
