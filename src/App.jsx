import { Routes, Route, NavLink } from 'react-router-dom';
// import { Home } from './pages/Home/Home';
// import { Movies } from './pages/Movies/Movies';
// import { MovieDetails } from './pages/MovieDetails/MovieDetails';
// import {Cast} from './components/module/Cast';
// import { Reviews } from 'components/module/Reviews';
import { lazy, Suspense} from 'react'
import { Watch } from 'react-loader-spinner'



const Home = lazy(()=> import('./pages/Home/Home'))
const Movies = lazy(()=> import('./pages/Movies/Movies'))
const MovieDetails = lazy(()=> import('./pages/MovieDetails/MovieDetails'))
const Cast = lazy(()=> import('./components/module/Cast'))
const Reviews = lazy(()=> import('components/module/Reviews'))




export const App = () => {
  return (
    <container>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <div>
      <Suspense fallback={<Watch/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
        </Suspense>
      </div>
    </container>
  );
};
