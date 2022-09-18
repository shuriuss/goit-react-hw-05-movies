import axios from 'axios';


//для названия  фильма https://api.themoviedb.org/3/search/movie?api_key=39fe5b73f599338374afe8e26b8126d9&page=1&query=harry
const BASE_URL = `https://api.themoviedb.org/3/search/movie?`;
const API_KEY = '39fe5b73f599338374afe8e26b8126d9';



export const fetchMovie = async (page, search) => {
 
  try {
    const URL = `${BASE_URL}?api_key=${API_KEY}&page=${page}&query=${search}`
    const r = await axios.get(URL);
    return r.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};


