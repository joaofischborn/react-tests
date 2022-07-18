import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Teste o componente About', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    const aboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(aboutPokedex).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    const aboutText = screen.getByText(/This application simulates/i);
    expect(aboutText).toBeInTheDocument();
    const aboutText2 = screen.getByText(/One can filter Pokémons/i);
    expect(aboutText2).toBeInTheDocument();
  });
  test('Teste se a página contém a imagem de uma Pokédex', () => {
    render(<MemoryRouter><About /></MemoryRouter>);
    const imagePokedex = screen.getByAltText(/pokédex/i);
    const URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(imagePokedex.src).toBe(URL);
  });
});
