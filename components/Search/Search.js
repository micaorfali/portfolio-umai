import React from 'react';

const Search = ({ search }) => {
  return (
    <>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Find a project" />
        </div>
        <div className="control">
          <button onClick={search} className="button is-info">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
