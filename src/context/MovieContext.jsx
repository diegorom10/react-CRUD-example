import { createContext, useState, useEffect } from "react";
import { movies as data } from "../data/movies";

//Nombre del contexto
export const MovieContext = createContext();

//componente que engloba todos los componenetes
export function MovieContextProvider(props) {
  //ESTO ESTABA EN MovieList PERO SE CAMBIÓ PARA QUE TODOS LOS COMPONENTES PUEDAN ACCEDER AL ARREGLO DE LA INFORMACIÓN
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, []);

  //Agregar una película nueva
  function createMovie(movie) {
    //[...movies, movie] SIGNIFICA TODO LO QUE TENGA EL ARREGLO movies + LA NUEVA movie
    setMovies([
      ...movies,
      {
        title: movie.movieTitle,
        //HACER EL ID DINAMICO
        id: movies.length,
        director: movie.director,
      },
    ]);
  }

  //Función para Eliminar pélicula
  function deleteMovie(movieId) {
    // console.log(movies)
    // console.log(movieId)
    //Guardar el estado con el nuevo array sin el elemento eliminado
    setMovies(movies.filter((movie) => movie.id !== movieId));
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        createMovie,
        deleteMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
