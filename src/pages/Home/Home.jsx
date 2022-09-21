import { fetchTrending } from '../../components/service/fetchTrending';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import s from '../Home/Home.module.css'

 const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTrending().then(r => {
      setData(() => {
        return [...r.results];
      });
    });
  }, []);

  // console.log(data);

  return (
    <main>
      <h1 className={s.title}>Trending today</h1>
      <ul>
        {data.map(({id, title}) => {
            return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>;
            </li>
          );
        })}
      </ul>
    </main>
  );
};


Home.propTypes={
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
}

export default Home