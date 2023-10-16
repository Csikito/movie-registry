import React, { useState } from "react";
// import MovieHeader from "../Components/MovieList/MovieHeader";
import MovieList from "../Components/MovieList/MovieList";
import Modal from "../Components/Modal/Modal";

const Home = ({
  movieData,
  setMovieData,
  title,
  age,
  description,
  setTitle,
  setAge,
  setDescription,
}) => {
  const [modal, setModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id =
      movieData.length > 0 ? movieData[movieData.length - 1].id + 1 : 1;
    const newMovieList = { title, age, description, id };
    setMovieData([...movieData, newMovieList]);
    setTitle("");
    setAge("");
    setDescription("");
    setModal(false);
  };

  const handleDelete = async (id) => {
    const newList = movieData.filter((movie) => movie.id !== id);
    setMovieData(newList);
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
        <div>
          <button className="btn-green" onClick={() => setModal(true)}>
            Add new movie
          </button>
        </div>
        <div className="flex w-full max-w-[600px] bg-dark border-b-2 py-2 text-[20px] ">
          <div className="w-1/2">Title</div>
          <div className="w-1/3">Age</div>
          <div className="w-1/3">Action</div>
        </div>
        {movieData.length > 0 ? (
          movieData.map((movie) => (
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
