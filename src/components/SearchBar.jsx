import PropTypes from 'prop-types';

function SearchBar({ keyword, onSearch, placeholder }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        placeholder={placeholder}
        onChange={(event) => onSearch(event.target.value)}
        aria-label="Cari catatan"
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  keyword: '',
  placeholder: 'Cari catatan...',
};

export default SearchBar;