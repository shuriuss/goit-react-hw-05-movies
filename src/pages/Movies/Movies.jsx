import { Searchbar } from 'components/module/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../../components/service/getMovieBySearch';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [search, setSerch] = useState('');
  const [data, setData] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    if (!search) {
      return;
    }

    getMovieBySearch(search).then(r => {
      setData(() => {
        return [...r.results];
      });
    });
  }, [search]);

  // console.log(data);

  
  const handleChange = e => {
    setInput(e.target.value)
  };

  const headleSubmit = e => {
    e.preventDefault();
    setSerch(input)
    
  };

  return (
    <main>
      <Searchbar search={input} onSubmit={headleSubmit} onChange={handleChange} />

      <ul>
        {data.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>;
            </li>
          );
        })}
      </ul>
    </main>
  );
};
