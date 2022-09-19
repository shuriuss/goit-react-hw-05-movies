import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from '../../components/service/getMovieById';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!movie) {
      return;
    }
    getMovieById(id).then(r => {
      setMovie(r);
    });
  }, []);
  // console.log(movie);

const {original_title, release_date,popularity, overview, genres} = movie


  return (
    <main>
      <Link to='/movies'>Go to back</Link>
      {/* <button to='movies'>Go to back</button> */}
      <div>
        <img src="" alt="" width={300} height={400} />
        <div>
          <h2>
            {original_title} {release_date}
          </h2>
          <p>User score: {popularity}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {/* {genres.map(({ id, name }) => {
              return (<li key={id}>{name}</li>)
            })} */}
            
          </ul>
        </div>
        <div>
          <Link to='cast'>Cast</Link>

          <Link to='reviews'>Reviews</Link>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
