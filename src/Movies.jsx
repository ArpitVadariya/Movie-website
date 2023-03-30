import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  console.log("Movies.jsx");
  // console.log("isloading ---> " + isLoading);
  if (isLoading) {
    return (
      <>
        <div className="">
          <div className="loading">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movies.map((curmovie) => {
            const { imdbID, Title, Poster } = curmovie;

            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 15 ? `${movieName}...` : movieName}
                    </h2>
                    {/* <h2>{imdbID}</h2> */}
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
