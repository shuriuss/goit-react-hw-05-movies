import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../service/getMovieReviews';
import PropTypes from 'prop-types'

const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
   
    getMovieReviews(id).then(r => {
      setData(() => {
        return [...r.results];
      });
    });
  }, [id]);

  // console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <ul>
          {data.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movies</p>
      )}
    </>
  );
};


Reviews.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })
}


export default Reviews