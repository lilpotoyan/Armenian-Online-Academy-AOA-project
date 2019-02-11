import React from 'react';

const SearchBox = ({value,onChange,placeholder}) => {
  return (
    <input 
      type="search"
      name="query"
      placeholder={placeholder}
      value={value}
      onChange={e=> onChange(e.target.value)}
    />
  );
};

export default SearchBox;