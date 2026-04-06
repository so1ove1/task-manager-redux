import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div className="search-block">
      <input
        type="text"
        placeholder="Поиск по задачам"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;