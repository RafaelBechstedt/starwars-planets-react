import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [filteredPlanet, setFilteredPlanet] = useState('');

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

  const value = useMemo(
    () => ({
      planetsList, filteredPlanet, handleInputFilter }),
    [planetsList, filteredPlanet],
  );

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
