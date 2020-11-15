import React from 'react'

export default function Item({ movie }) {
  const {
    id,
    title,
    poster_path,
    vote_average,
    vote_count,
    overview,
    release_date,
    original_language,
    original_title,
  } = movie;
  return (
    <>
      {
        <div className="film-container">
          <h1 className="film-title">{title}</h1>
          <article className="article">
            <div className="left-container">
              <img
                className="film-poster"
                src={`http://image.tmdb.org/t/p/w185${poster_path}`}
                alt={title}
              />
              <p className="film-rating">
                {vote_average}{" "}
                <span className="film-vote-count">({vote_count} votes)</span>
              </p>
            </div>
            <div className="right-container">{overview}</div>
          </article>
        </div>
      }
    </>
  );
}
