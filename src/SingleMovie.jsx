import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./context";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  // const [isLoading, setIsLoading, isError, setIsError] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("SingleMovie.jsx ---> ");
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [id]);

  console.log("SingleMovie.jsx");
  console.log(id);

  if (isLoading) {
    return (
      <>
        <div className="movie-section">
          <div className="loading">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <secion className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movies.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movies.Title}</p>
            <p className=""></p>
            <p className="card-text">Release Date : {movies.Released}</p>
            <p className="card-text">Actors : {movies.Actors}</p>
            <p className="card-text">Director : {movies.Director}</p>
            <p className="card-text">Type : {movies.Type}</p>
            <p className="card-text">Writer : {movies.Writer}</p>
            <p className="card-text">IMDB Rating : {movies.imdbRating} / 10</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </secion>
      {/* <div>Our single movie {id} </div> */}
    </>
  );
};

export default SingleMovie;
