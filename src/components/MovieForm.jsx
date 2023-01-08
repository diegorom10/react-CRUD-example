import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function MovieForm() {
  //Guardar lo que el usuario esta escribiendo en un estado
  const [movieTitle, setMovieTitle] = useState("");
  const [director, setDirector] = useState("");

  const { createMovie } = useContext(MovieContext);

  //Guardar lo que el usuarió escribió en el estado cuando da save
  const handleSubmit = (e) => {
    //ESTO ES PARA QUE EL FORMULARIO NO REINICIE LA PÁGINA CADA QUE HAY UN SUBMIT
    e.preventDefault();

    console.log(movieTitle, director);
    //AGREGAR LA PELÍCULA
    createMovie({
      movieTitle,
      director,
    });

    //LIMPIAR VALORES DE LOS ESTADOS DESPUES DE DAR SUBMIT
    setMovieTitle("");
    setDirector("");
  };

  return (
    <div className="max-w-md mx-auto bg-slate-700">
      <form onSubmit={handleSubmit} className="p-5 mb-4">
      <h1 className="text-3xl font-bold text-white mb-2">Add a Movie!</h1>
        <input
          placeholder="Write the title"
          onChange={(e) => setMovieTitle(e.target.value)}
          //LIMPIAR EL INPUT
          value={movieTitle}
          className="bg-blue-50 p-3 w-full mb-2 rounded-md"
          autoFocus
        />

        <textarea
          placeholder="Write the director's name"
          onChange={(e) => setDirector(e.target.value)}
          //LIMPIAR EL INPUT
          value={director}
          className="bg-blue-50 p-3 w-full mb-2 rounded-md"
        />

        <button className="bg-purple-800 px-2 py-1 rounded-md mt-2 hover:bg-purple-500 text-white">
          Save
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
