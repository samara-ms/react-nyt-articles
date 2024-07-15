import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CpArticlesContainer from './CpArticlesContainer';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock server setup
const server = setupServer(
  rest.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {
          id: 1,
          title: 'Test Article',
          byline: 'By Test Author',
          abstract: 'This is a test abstract.',
        },
      ],
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders loading spinner', () => {
  render(<CpArticlesContainer />);
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});

test('renders articles after fetch', async () => {
  render(<CpArticlesContainer />);
  await waitFor(() => expect(screen.getByText('Test Article')).toBeInTheDocument());
  expect(screen.getByText('By Test Author')).toBeInTheDocument();
});