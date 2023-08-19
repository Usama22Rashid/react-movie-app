import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import movies from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {/* here we use js map function for data.json */}
        {movies.map((element, index) => {
          return (
            <Movies
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
