import MoviesList from "./components/MoviesList";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="container mx-auto p-5">
        <MovieForm />
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
