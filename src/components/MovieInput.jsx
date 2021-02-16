import { useState, Fragment } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const MovieInput = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const onSearch = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.tvmaze.com/search/shows?q=${movie}`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));

    setMovie('');
  };

  return (
    <Fragment>
      <p className='text-center lead'>
        Are your looking for a movie or an actor ?
      </p>
      <form onSubmit={onSearch}>
        <div className='form-group'>
          <input
            autoFocus
            type='text'
            className='form-control'
            placeholder='Type a movie name & submit...'
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
        </div>

        <button
          disabled={movie.trim().length === 0}
          className='btn btn-success'
        >
          Submit
        </button>
      </form>

      <MovieList movies={movies} />
    </Fragment>
  );
};

export default MovieInput;
