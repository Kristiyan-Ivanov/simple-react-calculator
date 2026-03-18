import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '@/App';

describe('Calculator app basic math', () => {
  test('performs addition correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '6' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('105.5')).toBeInTheDocument();
  });

  test('performs chained statements correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '*' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('14')).toBeInTheDocument();
  });
});

describe('Test Error Notifications', () => {
  test('display lenght error', () => {
    render(<App />);

    for (let i = 0; i < 40; i++) {
      fireEvent.click(
        screen.getByRole('button', { name: i % 2 == 0 ? '9' : '+' }),
      );
    }

    expect(
      screen.getByText('Maximum display limit reached.'),
    ).toBeInTheDocument();
  });

  test('Dividision by zero not allowed', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '/' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(
      screen.getByText('Division by zero is not allowed.'),
    ).toBeInTheDocument();
  });

  test.each(['9'.repeat(16), '9'.repeat(4) + '+' + '9'.repeat(16)])(
    'Maximum digits error',
    (input) => {
      render(<App />);

      for (const char of input) {
        fireEvent.click(screen.getByRole('button', { name: char }));
      }

      expect(
        screen.getByText('Maximum number of digits reached.'),
      ).toBeInTheDocument();
    },
  );
});
