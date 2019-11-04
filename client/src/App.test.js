import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerList from './components/PlayerList';
import App from './App';

const player = [
  {name: 'Megan Rapino',
  country: 'united states'}
  ]

test('app renders without crashing', () => {
  render(<App />);
});

test("contains player cards", () => {
  const container = render(<PlayerList players={player}/>)
  container.getByText(/Number of Searches:/i)
})

test("contains change background button", () => {
  const container = render(<App />)
  container.getByText(/change header color/i)
})

test('button event fires', () => {
  const container = render(<App />)
  fireEvent.click(container.getByText(/change header color/i))
})