import { useEffect, Fragment, useState } from 'react';
import axios from 'axios';

const MovieDetails = (props) => {
  const [movie, setMovie] = useState('');

  const notImgUrl =
    'https://s3.amazonaws.com/speedsport-news/speedsport-news/wp-content/uploads/2018/07/01082232/image-not-found.png';

  const getMovie = () => {
    axios
      .get(`https://api.tvmaze.com/shows/${props.match.params.id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (!movie) return null;

  return (
    <Fragment>
      <div className='row'>
        <div className='col-sm-7'>
          <img
            className='img-fluid'
            style={{ height: '300px', width: '100%' }}
            src={movie.image ? movie.image.original : notImgUrl}
            alt=''
          />

          <h6 className='mt-4'>Genres</h6>
          {movie.genres.length === 0 && <p>No genre found</p>}
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <p className='lead'>Language: {movie.language} </p>
          <p className='lead'>Status: {movie.status} </p>
          <p className='lead'>Premiered:{movie.premiered}</p>
        </div>

        <div className='col-sm-5'>
          <p
            className='text-justify lead'
            dangerouslySetInnerHTML={{
              __html: movie.summary,
            }}
          ></p>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
