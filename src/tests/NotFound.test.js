import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from '../pages';

describe('Teste o componente NotFound', () => {
  test('Teste se a página contém um heading h2', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const notFoundMessage = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(notFoundMessage).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const pikachuImage = screen.getByAltText(/Pikachu crying/i);
    const URL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(pikachuImage.src).toBe(URL);
  });
});
