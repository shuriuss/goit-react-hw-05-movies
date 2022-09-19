import { useState, useEffect } from 'react';
import { getMoviCredits } from '../service/getMovieCredits ';
import { useParams } from 'react-router-dom';


// const id = 272;

export const Cast = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    
    getMoviCredits(id).then(r => {
      setData(() => {
        return r;
      });
    });
  }, [id]);

  console.log(data);
  return (
    <h3>hello</h3>
  )
};
