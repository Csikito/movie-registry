import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Movie from "./Page/Movie";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const obj = [
    {
      title: "HomeAlon",
      age: "8",
      description: "Egy kis fiúról szól aki ....",
      id: 1,
    },
    {
      title: "Predator",
      age: "18",
      description: "Szörny megrakja a világot ....",
      id: 2,
    },
    {
      title: "Kacsa",
      age: "4",
      description: "A farmon él egy kis kacsa aki ....",
      id: 3,
    },
  ];

  const [movieData, setMovieData] = useState(obj);
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieData={movieData}
              setMovieData={setMovieData}
              title={title}
              setTitle={setTitle}
              age={age}
              setAge={setAge}
              description={description}
              setDescription={setDescription}
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
