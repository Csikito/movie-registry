import React, { useState } from "react";
import MovieList from "../Components/MovieList/MovieList";
import Modal from "../Components/Modal/Modal";
import Filter from "../Components/Filter/Filter";
import api from "../api/movieApi";

const Home = ({
  movieData,
  setMovieData,
  title,
  age,
  description,
  setTitle,
  setAge,
  setDescription,
  searchTitle,
  setSearchTitle,
  searchAge,
  setSearchAge,
  searchResults,
}) => {
  const [modal, setModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id =
      movieData.length > 0 ? movieData[movieData.length - 1].id + 1 : 1;
    const newMovie = { title, age, description, id };
    try {
      const res = await api.post("/movie", newMovie);
      const newMovieList = [...movieData, res.data];
      setMovieData(newMovieList);
      setTitle("");
      setAge("");
      setDescription("");
      setModal(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleDelete = async (id) => {
    const movie = movieData.find((movies) => movies.id === id);
    const newList = movieData.filter((movie) => movie.id !== id);
    try {
      await api.delete(`/movie/${movie._id}`);
      setMovieData(newList);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main className="p-10">
      <div className="w-full flex flex-col justify-center items-center">
        {modal && (
          <Modal
            setModal={setModal}
            title={title}
            setTitle={setTitle}
            age={age}
            setAge={setAge}
            description={description}
            setDescription={setDescription}
            handleSubmit={handleSubmit}
          />
        )}
        <div className="flex items-center w-full max-w-[600px] text-[20px] pb-2">
          <Filter
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            searchAge={searchAge}
            setSearchAge={setSearchAge}
          />
          <button className="btn-green w-1/3" onClick={() => setModal(true)}>
            Add movie
          </button>
        </div>
        <div className="flex w-full max-w-[600px] bg-dark border-b-2 py-2 text-[20px] ">
          <div className="w-1/2">Title</div>
          <div className="w-1/3">Age</div>
          <div className="w-1/3">Action</div>
        </div>
        {movieData.length > 0 ? (
          searchResults.map((movie) => (
            <MovieList
              key={movie.id}
              movie={movie}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="flex items-center w-full max-w-[600px]  bg-slate-500 py-1 border-b-[1px] ">
            <div className="w-full animate-pulse">Please add movies</div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
