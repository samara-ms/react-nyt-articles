import React from 'react';
import { render, screen } from '@testing-library/react';
import CpArticleList from './CpArticleList';
import '@testing-library/jest-dom/extend-expect';

const articles = [
  {
    id: 1,
    title: 'Test Article 1',
    byline: 'By Test Author 1',
  },
  {
    id: 2,
    title: 'Test Article 2',
    byline: 'By Test Author 2',
  },
];

test('renders list of articles', () => {
  render(<CpArticleList articles={articles} />);
  expect(screen.getByText('Test Article 1')).toBeInTheDocument();
  expect(screen.getByText('Test Article 2')).toBeInTheDocument();
});