import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  expect(screen.getByText(/Employee Library/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
