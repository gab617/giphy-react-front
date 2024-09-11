import React, { useState } from "react";
import Gif from "../Gif";
function ListOfGifs({ gifs }) {

  return (
    <div
      className="w-1/2"
    >
      {gifs.map(({ id, title, url }) => {
        return (
          <div className="mb-1 w-full lg:flex lg:flex-col overflow-hidden lg:bg-black lg:bg-opacity-75">
            <Gif key={id} title={title} id={id} url={url} />
          </div>
        );
      })}
    </div>
  );
}

export default ListOfGifs;
