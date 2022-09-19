import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../service/getMovieReviews';

export const Reviews = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // if () {
    //   return;
    // }

    getMovieReviews(id).then(r => {
      setData(() => {
        return [...r.results];
      });
    });
  }, [id]);

  // console.log(data);
  return (
    <>
      <h2>ffff</h2>
      {/* <ul>
        {data.map(item => {
          return (
            <li key={item.author}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
