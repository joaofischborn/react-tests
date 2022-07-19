import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente Pokemon', () => {
  test('Teste se é renderizado um card com as informações de um pokémon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toBeInTheDocument();
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toBeInTheDocument();
    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toBeInTheDocument();
    expect(weightPokemon).toHaveTextContent('Average weight:');
    const imagePokemon = screen.getByAltText(/pikachu sprite/i);
    expect(imagePokemon).toBeInTheDocument();
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails.href === '/pokemons/25');
    userEvent.click(moreDetails);
    const URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imageSprite = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(imageSprite.src === URL).toBeTruthy();
    expect(imageSprite.alt === 'Pikachu sprite');
    const favoriteChecked = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(favoriteChecked);
    const typeOfPokemon = screen.getAllByText(/electric/i);
    expect(typeOfPokemon.length === 2).toBeTruthy();
    const favorited = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorited).toBeInTheDocument();
    expect(favorited.src === 'http://localhost/star-icon.svg').toBeTruthy();
  });
});
