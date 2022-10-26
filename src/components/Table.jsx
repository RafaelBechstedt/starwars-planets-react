import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { planetsList } = useContext(MyContext);
  console.log(planetsList);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Terrain</th>
          <th>Diameter</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Films</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planetsList.map((element) => (
          <tr key={ element.name }>
            <td>{ element.name }</td>
            <td>{ element.rotation_period }</td>
            <td>{ element.orbital_period }</td>
            <td>{ element.diameter }</td>
            <td>{ element.climate }</td>
            <td>{ element.gravity }</td>
            <td>{ element.terrain }</td>
            <td>{ element.surface_water }</td>
            <td>{ element.population }</td>
            <td>{ element.films }</td>
            <td>{ element.created }</td>
            <td>{ element.edited }</td>
            <td>{ element.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
