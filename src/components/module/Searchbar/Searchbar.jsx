import s from './Searchbar.module.css';
import { useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';

export function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(() => {
    return [...searchParams].reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }, [searchParams]);

  const [query, setQuery] = useState(queryParams.search ?? '');

  const handleInputChange = evt => {
    // const { value } = evt.target;
    setQuery(evt.target.value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (!query.trim()) {
      return;
    }

    setSearchParams(prev => {
      return { ...queryParams, search: query };
    });
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <input
        className={s.input}
        type="text"
        placeholder="Search movies"
        onChange={handleInputChange}
        value={query}
      />
      <button type="submit" className={s.button}>
        <span className={s.buttonlabel}>Search</span>
      </button>
    </form>
  );
}
