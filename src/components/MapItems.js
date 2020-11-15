import React, { useState, useEffect } from "react";
import axios from "axios"
import Item from './Item'
import './Mapitems.css'

export default function MapItems({ searchTerm, setSearchTerm }) {
  const tmdbAPI = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState()

  const searchMovies = () => {
    try {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`)
        .then((res) => {
          setMovies(res.data.results);
          setTotalPages(res.data.total_pages);
          console.log(totalPages)
        });
    } catch (error) {
      console.log(error)
    }
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1)
  };

  const paginations = () => {
    return (
      <div className="pagination">
        {page > 1 && (
          <button onClick={() => prevPage()} className="button prev">
            prev
          </button>
        )}
        &nbsp;{page}&nbsp;
        {page + 1 !== totalPages && (
          <button onClick={() => nextPage()} className="button next">
            next
          </button>
        )}
      </div>
    );
  }

  useEffect(() => {
    searchMovies(searchTerm, page);
  }, [searchTerm, page]);

  return (
    <div>
      {movies.map((movie, index) => {
        return <Item key={index} movie={movie} />;
      })}
      {movies.length > 0 ? paginations() : ""}
    </div>
  );
}
