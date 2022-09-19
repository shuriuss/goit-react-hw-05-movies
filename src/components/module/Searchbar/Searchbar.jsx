import s from './Searchbar.module.css';

export function Searchbar({ search, onSubmit, onChange}) {

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input
        className={s.input}
        type="text"
        placeholder="Search movies"
        onChange={onChange}
        value={search}
      />
      <button type="submit" className={s.button}>
        <span className={s.buttonlabel}>Search</span>
      </button>
    </form>
  );
}
