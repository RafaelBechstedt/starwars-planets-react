import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [filteredPlanet, setFilteredPlanet] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filtersNotUsedYet, setFiltersNotUsedYet] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [columnFilter, setColumnFilter] = useState(filtersNotUsedYet[0]);

  const requestAPI = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const { results } = await response.json();
    results.forEach((element) => {
      delete element.residents;
    });
    setPlanetsList(results);
  };

  useEffect(() => { requestAPI(); }, []);

  const handleInputFilter = ({ target: { value } }) => {
    setFilteredPlanet(value);
  };

  const handleColumnFilter = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  const handleComparisonFilter = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  const handleValueFilter = ({ target: { value } }) => {
    setValueFilter(value);
  };

  const handleButtonFilter = () => {
    const updatedFilters = filtersNotUsedYet
      .filter((element) => element !== columnFilter);
    setFiltersNotUsedYet(updatedFilters);
    setColumnFilter(updatedFilters[0]);

    if (comparisonFilter === 'maior que') {
      const filter = planetsList
        .filter((element) => Number(element[columnFilter]) > Number(valueFilter));
      setPlanetsList(filter);
    }
    if (comparisonFilter === 'menor que') {
      const filter = planetsList
        .filter((element) => Number(element[columnFilter]) < Number(valueFilter));
      setPlanetsList(filter);
    }
    if (comparisonFilter === 'igual a') {
      const filter = planetsList
        .filter((element) => element[columnFilter] === valueFilter);
      setPlanetsList(filter);
    }
  };

  const value = useMemo(() => ({
    planetsList,
    filteredPlanet,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filtersNotUsedYet,
    handleInputFilter,
    handleColumnFilter,
    handleComparisonFilter,
    handleValueFilter,
    handleButtonFilter,
  }), [planetsList,
    filteredPlanet,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filtersNotUsedYet]);

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
