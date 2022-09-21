import { Searchbar } from 'components/module/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../../components/service/getMovieBySearch';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Movies.module.css'

const Movies = () => {
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const location = useLocation();

  console.log(search);

  // const [searchParams, setSearchParams] = useSearchParams('');

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

  return (
    <main>
      <Searchbar />
<div>
      <ul className={s.list}>
        {data.length > 0 &&
          data.map(({ id, title }) => {
            return (
              <li key={id} className={s.item}>
                <Link to={`${id}`} state={{ from: location }} className={s.link}>
                  {title}
                </Link>
                ;
              </li>
            );
          })}
      </ul>
      </div>
    </main>
  );
};

Movies.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Movies;

//-------------------------------------//
// export const Movies = () => {
//   const [search, setSerch] = useState('');
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState('')
//   const location = useLocation()

//   // const [searchParams, setSearchParams] = useSearchParams('');

//   useEffect(() => {
//     if (!search) {
//       return;
//     }

//     getMovieBySearch(search).then(r => {
//       setData(() => {
//         return [...r.results];
//       });
//     });
//   }, [search]);

//   console.log(data);

//   const handleChange = e => {
//     setInput(e.target.value)
//   };

//   const headleSubmit = e => {
//     e.preventDefault();
//     setSerch(input)

//   };

//   return (
//     <main>
//       <Searchbar search={input} onSubmit={headleSubmit} onChange={handleChange} />

//       <ul>
//         {data.map(({ id, title }) => {
//           return (
//             <li key={id}>
//               <Link to={`${id}`} state={{from: location}}>{title}</Link>;
//             </li>
//           );
//         })}
//       </ul>
//     </main>
//   );
// };
