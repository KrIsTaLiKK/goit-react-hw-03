import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChangeValue }) => {
  const searchQueryId = useId();
  return (
    <div className={css.searchWrap}>
      <label htmlFor={searchQueryId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        name="searchQuery"
        placeholder="Search by name..."
        id={searchQueryId}
        value={value}
        onChange={e => onChangeValue(e.target.value)}
      />
    </div>
  );
};
