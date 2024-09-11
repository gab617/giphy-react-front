import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import LastSearch from "./LastSearch";
import "./Trending.css";
import { Trending } from "./Trending";
import { FormSearch } from "../FormSearch/FormSearch";

const POPULAR_GIFS = [
  "Messi",
  "Matrix",
  "Entretenimiento",
  "Anime",
  "Power Rangers",
  "Gatitos",
];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation(); //

  const { loading, gifs, gifsTrending, gifsDivided } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(keyword);
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    evt.preventDefault();
    setKeyword(evt.target.value);
  };

  return (
    <div className="flex flex-col w-95 m-auto">
      {/* Home */}
      <FormSearch
        POPULAR_GIFS={POPULAR_GIFS}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        keyword={keyword}
      />

      <div className=" rounded-lg" id="">
        <div className="flex lg:w-80 mx-auto items-center gap-2">
          <div className="mt-1">
            <svg
              fill="none"
              stroke="cyan"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
            >
              <path d="M23 6l-9.5 9.5-5-5L1 18" />
              <path d="M17 6h6v6" />
            </svg>
          </div>

          <h1 className=" text-2xl mt-4 mb-4 text-white ">Trending</h1>
        </div>
        <Trending gifsTrending={gifsTrending} loading={loading} />
      </div>

      <div className="lg:w-80 mx-auto listGifs rounded-xl p-1">
        <LastSearch gifsDivided={gifsDivided} />
      </div>
    </div>
  );
}
