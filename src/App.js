import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
