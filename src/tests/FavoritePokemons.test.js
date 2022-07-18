import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';

describe('Teste o componente Pokemon', () => {
  test('Teste se é renderizado um card com as informações de um pokémon', () => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);
    const noFavoritePokemon = screen.getByText(/No favorite pokemon found/i);
    expect(noFavoritePokemon).toBeInTheDocument();
  });
});
