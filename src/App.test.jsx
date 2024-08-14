import { render, screen } from '@testing-library/react';
import App from './App';
import Providers from './Providers';

test('renders learn react link', () => {
  render(<App />, { wrapper: Providers });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
