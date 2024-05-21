import React from 'react';

const Search = ({ search }) => {
  return (
    <>
      <div
        className="field has-addons"
        style={{ justifyContent: 'flex-end', margin: '0 2em' }}
      >
        <div className="control">
          <input className="input" type="text" placeholder="Find a project" />
        </div>
        <div className="control">
          <button
            onClick={search}
            className="button is-info"
            style={{ backgroundColor: '#6F2977' }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
