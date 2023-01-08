import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function MovieCard({ movies }) {
  const { deleteMovie } = useContext(MovieContext);

  return (
    <div className="bg-emerald-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize text-amber-400">
        {movies.title}
      </h1>
      <p className="text-sm">{movies.director}</p>

      <button
        className="bg-red-700 px-2 py-1 rounded-md mt-2 hover:bg-red-500"
        onClick={() => deleteMovie(movies.id)}
      >
        Delete Movie
      </button>
    </div>
  );
}

export default MovieCard;
