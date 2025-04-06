import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.search_box}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onFilterChange} />
      </label>
    </div>
  );
};

export default SearchBox;
