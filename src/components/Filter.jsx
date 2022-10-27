import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const {
    filteredPlanet,
    handleInputFilter,
    columnFilter,
    handleColumnFilter,
    comparisonFilter,
    handleComparisonFilter,
    valueFilter,
    handleValueFilter,
    handleButtonFilter,
  } = useContext(MyContext);

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          value={ filteredPlanet }
          onChange={ handleInputFilter }
        />
      </label>

      <select
        value={ columnFilter }
        onChange={ handleColumnFilter }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        value={ comparisonFilter }
        onChange={ handleComparisonFilter }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        value={ valueFilter }
        onChange={ handleValueFilter }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleButtonFilter }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
