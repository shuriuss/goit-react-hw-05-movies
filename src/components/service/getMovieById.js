import axios from 'axios';


//для id фильма https://api.themoviedb.org/3/movie/616037?api_key=39fe5b73f599338374afe8e26b8126d9
const BASE_URL = `https://api.themoviedb.org/3/movie/`;
const API_KEY = '39fe5b73f599338374afe8e26b8126d9';



export const getMovieById = async (id) => {
 
  try {
    // const URL = `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
    const URL = `${BASE_URL}${id}?api_key=${API_KEY}`
    const r = await axios.get(URL);
    return r.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};


