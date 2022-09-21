import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense} from 'react'
import { Watch } from 'react-loader-spinner'
import s from './App.module.css'



const Home = lazy(()=> import('./pages/Home/Home'))
const Movies = lazy(()=> import('./pages/Movies/Movies'))
const MovieDetails = lazy(()=> import('./pages/MovieDetails/MovieDetails'))
const Cast = lazy(()=> import('./components/module/Cast'))
const Reviews = lazy(()=> import('components/module/Reviews'))




export const App = () => {

  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
};

  return (
    <container>
      <header>
        <nav className={s.nav}>
          <NavLink className={getActiveClassName} to="/" end>
            Home
          </NavLink>
          <NavLink className={getActiveClassName} to="/movies">Movies</NavLink>
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
