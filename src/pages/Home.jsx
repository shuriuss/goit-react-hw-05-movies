import { fetchTrending } from '../components/service/fetchTrending';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTrending().then(r => {
      setData(() => {
        return [...r.results];
      });
    });
  }, []);

  console.log(data);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {data.map(item => {
            return (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title}</Link>;
            </li>
          );
        })}
      </ul>
    </main>
  );
};
