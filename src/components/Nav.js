import React from 'react'
import logo from '../assets/img/tmdbLogo.png'
import './Nav.css';

function Nav({ searchTerm, setSearchTerm }) {
  console.log(searchTerm);
  return (
    <header>
      <nav>
        <form onSubmit={(e) => setSearchTerm(e.target.value)}>
          <img className="logo" src={logo} alt="tmdb-logo" />
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </nav>
    </header>
  );
}

export default Nav
