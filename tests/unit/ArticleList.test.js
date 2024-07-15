import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from '../../src/components/CpArticleList';

describe('ArticleList Component', () => {
  test('renders article list', () => {
    render(<ArticleList />);
    const linkElement = screen.getByText(/Article List/i);
    expect(linkElement).toBeInTheDocument();
  });
});