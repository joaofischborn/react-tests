import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste o componente App', () => {
  test('Teste se o topo da aplicação contém um conjunto de links de navegação', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    const linkFavorite = screen.getByRole('link', { name: /favorite/i });
    expect(linkFavorite).toBeInTheDocument();
  });
});
