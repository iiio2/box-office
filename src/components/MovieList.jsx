import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const notImgUrl =
    'https://s3.amazonaws.com/speedsport-news/speedsport-news/wp-content/uploads/2018/07/01082232/image-not-found.png';

  return (
    <div>
      <h4 className='text-center'>Movie list</h4>
      <div className='movies'>
        {movies.map((movie) => (
          <Link
            target='_blank'
            to={`/movie/${movie.show.id}?ref=home`}
            key={movie.show.id}
          >
            <div className='card' key={movie.show.id}>
              <img
                className='img-fluid'
                src={movie.show.image ? movie.show.image.medium : notImgUrl}
                alt='img not found'
              />
              <h5 className='text-center'>{movie.show.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
