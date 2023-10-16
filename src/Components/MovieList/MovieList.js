import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movie, handleDelete }) => {
  return (
    <>
      <div className="flex items-center w-full max-w-[600px]  bg-slate-500 py-1 border-b-[1px] ">
        <div className="w-1/2">{movie.title}</div>
        <div className="w-1/3">{movie.age}</div>
        <div className="w-1/3">
          <Link to={`/movie/${movie.id}`} type="button" className="btn-blue">
            Details
          </Link>
          <button
            type="button"
            className="btn-red"
            onClick={() => handleDelete(movie.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieList;
