import axios from 'axios';

//https://api.themoviedb.org/3/movie/272/credits?api_key=39fe5b73f599338374afe8e26b8126d9
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '39fe5b73f599338374afe8e26b8126d9';



export const getMoviCredits = async (id) => {
 
  try {
    // const URL ='https://api.themoviedb.org/3/movie/272/credits?api_key=39fe5b73f599338374afe8e26b8126d9'
    const URL = `${BASE_URL}/${id}/credits?api_key=${API_KEY}`
    const r = await axios.get(URL);
    return r.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};


