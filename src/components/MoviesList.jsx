import MovieCard from "./MovieCard";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

//SE VA A MANDAR EL ARREGLO DE DATOS POR PROPS PARA QUE ESTE COMPONENTO LO PUEDA USAR
function MoviesList() {
  const { movies } = useContext(MovieContext);

  if (movies.length === 0) {
    return <h1 className="text-4xl font-bold text-white text-center">No Films Available</h1>;
  }

  return (
    //RECORRER EL ARREGLO
    <div className="grid grid-cols-2 gap-3">
      {movies.map((movies) => (
        //POR CADA VEZ QUE SE RECORRA EL ARREGLO SE GENERA LA MovieCard con una Movie
        <MovieCard key={movies.id} movies={movies} />
      ))}
    </div>
  );
}

export default MoviesList;
