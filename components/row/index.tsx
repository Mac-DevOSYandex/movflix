/* Componenets/row/index.tsx */

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Thumbnail from "components/thumbnail/Thumbnail";
import { useRef, useState } from "react";
import { Movie } from "types/typings";
import styled from "./Row.module.css";

interface Props {
  title?: string;
  // movie: Movie | DocumentData[]; /* For Supabase */
  movies?: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  //
  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className={styled.title}>{title}</h2>
      <div className="group relative md:-ml-2">
        {/* <ChevronDoubleLeftIcon
          className={`${styled.chevronL} ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        /> */}
        <ChevronLeftIcon
          className={`rounded-full bg-white text-slate-700 shadow-lg absolute top-0 bottom-0 -left-5 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        {/* Thumbnail */}
        <div
          ref={rowRef}
          className="thumbnailWrapper flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 md:mr-16"
        >
          {movies?.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="rounded-full bg-white text-slate-700 shadow-lg absolute top-0 bottom-0 right-12 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;
