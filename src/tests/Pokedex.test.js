import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente Pokedex', () => {
  test('Teste se a página contém um h2 com o texto Encountered pokémons', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const h2 = screen.getByRole('heading',
      { name: /encountered pokémons/i, level: 2 });
    expect(h2).toBeInTheDocument();
  });
  test('Teste se é exibido o próximo pokémon da lista quando o botão é clicado', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const firstPokemon = screen.getByText(/pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
    expect(firstPokemon).toHaveTextContent(/pikachu/i);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(button);
    const secondPokemon = screen.getByText(/charmander/i);
    expect(secondPokemon).toBeInTheDocument();
    expect(secondPokemon).toHaveTextContent(/charmander/i);
    userEvent.click(button);
    const thirdPokemon = screen.getByText(/caterpie/i);
    expect(thirdPokemon).toBeInTheDocument();
  });
  test('Teste se a Pokédex tem os botões de filtro', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    const buttonElectric = screen.getByRole('button', { name: /electric/i });
    userEvent.click(buttonElectric);
    const typeElectric = screen.getByTestId('pokemon-type');
    expect(typeElectric).toBeInTheDocument();
  });
  it('Verifica se o botão All mostra os pokémons de todos os tipos', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonType = screen.getAllByTestId('pokemon-type-button');
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonType[0]);
    userEvent.click(buttonAll);
    const buttonNext = screen.getByTestId(/next-pokemon/);
    const typePokemonId = screen.getByTestId('pokemon-type');
    expect(typePokemonId).toHaveTextContent(/electric/i);
    userEvent.click(buttonNext);
    expect(typePokemonId).not.toHaveTextContent(/electric/i);
  });
});
