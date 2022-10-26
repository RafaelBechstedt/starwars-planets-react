import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { filteredPlanet, handleInputFilter } = useContext(MyContext);
  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        value={ filteredPlanet }
        onChange={ handleInputFilter }
      />
    </label>
  );
}

export default Filter;
