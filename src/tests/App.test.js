import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação', () => {
  test('Testa se ao entrar na aplicação renderiza uma tabela', () => {
    render(<App />);
    const tabela = screen.getByRole('table')
    expect(tabela).toBeInTheDocument() 
  })

  test('Testa se o input nome está funcionando', async () => {
    render(<App />);
    const nameFilter = screen.getByTestId('name-filter');
    userEvent.type(nameFilter, 'T');
    waitFor(() => {
      const arrayOfPlanets = screen.getAllByTestId('planet-name');
      expect(arrayOfPlanets.length).toBe(1)
    })
  })

  test('Testa se o input column, comparison e value estão funcionando', async () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter')
    userEvent.selectOptions(columnFilter, 'population')
    userEvent.selectOptions(comparisonFilter, 'igual a')
    userEvent.type(valueFilter, '1000')
    userEvent.click(button)
    waitFor(() => {
      const arrayOfPlanets = screen.getAllByTestId('planet-name');
      expect(arrayOfPlanets.length).toBe(1)
    })
  })

  test('Testa se o input column, comparison e value estão funcionando', async () => {
    render(<App />);
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter')
    userEvent.selectOptions(columnFilter, 'diameter')
    userEvent.selectOptions(comparisonFilter, 'maior que')
    userEvent.type(valueFilter, '100000')
    userEvent.click(button)
    waitFor(() => {
      const arrayOfPlanets = screen.getAllByTestId('planet-name');
      expect(arrayOfPlanets.length).toBe(1)
    })
  })

})
