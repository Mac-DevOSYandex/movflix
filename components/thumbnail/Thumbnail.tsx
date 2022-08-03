import { ImageUrl } from "constants/movie";
import Image from "next/image";
import { Movie } from "types/typings";

interface Props {
  movie: Movie;
  // movie: Movie | DocumentData; /* For Supabase */
}
const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`${ImageUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
