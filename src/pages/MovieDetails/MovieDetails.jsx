import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../components/service/getMovieById';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Watch } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (!movie) {
      return;
    }
    getMovieById(id).then(r => {
      setMovie(r);
    });
  }, [movie, id]);

  const {
    original_title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
  } = movie;



  return (
    <main>
      <Link to={location.state?.from ?? '/movies'} className={s.button}>
        Go to back
      </Link>
      <div className={s.box}>
        {poster_path && <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width={300}
          height={400}
          
        />}
        
        <div className={s.info}>
          <h2>
            {original_title} {release_date && release_date.slice(0, 4)}
          </h2>
          <p>User score: {Math.floor(popularity)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres && (
            <ul>
              {genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
      <div className={s.box__link}>
        <Link to="cast" state={location.state?.from ? location.state : null} className={s.link}>
          Cast
        </Link>

        <Link to="reviews" state={location.state?.from ? location.state : null} className={s.link}>
          Reviews
        </Link>
        <Suspense fallback={<Watch />}></Suspense>
        <Outlet />
      </div>
    </main>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    popularity: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
  id: PropTypes.string,
};

export default MovieDetails;
