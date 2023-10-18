import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Movie from "./Page/Movie";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import api from "./api/movieApi";

function App() {
  // const obj = [
  //   {
  //     title: "HomeAlon",
  //     age: "8",
  //     description: "Egy kis fiúról szól aki ....",
  //     id: 1,
  //   },
  //   {
  //     title: "Predator",
  //     age: "18",
  //     description: "Szörny megrakja a világot ....",
  //     id: 2,
  //   },
  //   {
  //     title: "Kacsa",
  //     age: "4",
  //     description: "A farmon él egy kis kacsa aki ....",
  //     id: 3,
  //   },
  // ];

  const [movieData, setMovieData] = useState([]);
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/movie");
        setMovieData(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredResults = movieData.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        movie.age.includes(searchAge)
    );
    setSearchResults(filteredResults.reverse());
  }, [movieData, searchTitle, searchAge]);

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieData={movieData}
              searchResults={searchResults}
              setMovieData={setMovieData}
              title={title}
              setTitle={setTitle}
              age={age}
              setAge={setAge}
              description={description}
              setDescription={setDescription}
              searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
              searchAge={searchAge}
              setSearchAge={setSearchAge}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<Movie movieData={movieData} setMovieData={setMovieData} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
