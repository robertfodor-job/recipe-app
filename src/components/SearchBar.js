import React from 'react';

const SearchBar = ({ loading, handleSubmit, value, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        disabled={loading}
        palceholder="Search recipes"
        className="form-control"
        onChange={onChange}
      />
      <button disabled={loading || !value} type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
