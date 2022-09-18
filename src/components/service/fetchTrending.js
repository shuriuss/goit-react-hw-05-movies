import axios from 'axios';


//для главной страницы https://api.themoviedb.org/3/trending/movie/day?api_key=39fe5b73f599338374afe8e26b8126d9
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '39fe5b73f599338374afe8e26b8126d9';


export const fetchTrending = async () => {
 
  try {
    // const URL = `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
    const URL = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    const r = await axios.get(URL);
    return r.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};


