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
    filtersNotUsedYet,
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
        {
          filtersNotUsedYet.map((element) => (
            <option key={ element } value={ element }>
              { element }
            </option>
          ))
        }
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
