import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviCredits } from '../service/getMovieCredits ';
import PropTypes from 'prop-types'
import s from './Cast.module.css'


const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMoviCredits(id)
      .then(r => {
        if (cast.length) {
          return;
        }
        setCast(() => {
          return [...r.cast]
        })
      })
      
  }, [id, cast]);

  console.log(cast);

  if (!cast.length) {
    return;
  }

  return (
    <>
      <h3>Cast</h3>
      <ul className={s.list}>
        {cast.map(({ character, id, original_name, profile_path }) => (
          <li key={id} className={s.item}>
            {profile_path && (
              <img
                width="120"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
            )}
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
  })
  }

export default Cast;
