import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Movie = ({ movieData, setMovieData }) => {
  const { id } = useParams();
  const movie = movieData.find((movies) => movies.id.toString() === id);

  const [editTitle, setEditTitle] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEditTitle(movie.title);
    setEditAge(movie.age);
    setEditDescription(movie.description);
  }, [movie]);

  const handleEdit = (id) => {
    const updateMovie = {
      title: editTitle,
      age: editAge,
      description: editDescription,
      id,
    };
    const newMovieList = movieData.map((movie) =>
      movie.id.toString() === id ? updateMovie : movie
    );

    setMovieData(newMovieList);
    navigate("/");
  };
  return (
    <main>
      <div className="absolute top-52 left-1/2 -translate-x-1/2 bg-dark text-black w-[600px] p-5 z-20">
        <form className="grid grid-cols-3 gap-4">
          <div className="col-span-2 felx flex-col ">
            <label
              htmlFor="title"
              className="w-full block text-light text-start font-bold pb-1"
            >
              Title:
            </label>
            <input
              type="text"
              className="w-full p-1 "
              placeholder="Enter title..."
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-span-1 pl-5">
            <label
              htmlFor="age"
              className="w-full block text-light text-start font-bold  pb-1"
            >
              Age:
            </label>
            <input
              type="number"
              className="p-1 w-full"
              placeholder="Enter age..."
              value={editAge}
              onChange={(e) => setEditAge(e.target.value)}
              max="18"
              min="0"
              required
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="description"
              className="w-full block text-light text-start font-bold  pb-1 "
            >
              Description:
            </label>
            <textarea
              className="p-1 w-full h-[200px] resize-none"
              name="description"
              placeholder="What was the movie about?"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className=" col-span-3">
            <button
              type="button"
              className="btn-green w-1/3"
              onClick={() => handleEdit(id)}
            >
              Edit
            </button>
            <Link to="/" type="button" className="btn-red w-1/3">
              Back the list
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Movie;
