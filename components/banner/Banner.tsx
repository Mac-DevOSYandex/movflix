import { InformationCircleIcon } from "@heroicons/react/solid";
import { baseUrl } from "constants/movie";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { Movie } from "types/typings";
import styled from "./Banner.module.css";

interface Props {
  netflixOriginals: Movie[];
}
// import { Props } from 'types/movie';

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null | undefined>();

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
  }, [netflixOriginals]);
  return (
    <div className={styled.banner}>
      <div className="absolute top-0 left-0 w-screen h-[95vh] object-cover -z-10">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill" objectFit="cover" alt="" />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-sm text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      {/* Buttons */}
      <div className="flex space-x-3">
        <button className="banner-button bg-white text-primary">
          <FaPlay className="h-4 w-4 text-primary md:h-7 md:w-7" />
          Play
        </button>
        <button className="banner-button bg-grey/70 ">
          More Info
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
