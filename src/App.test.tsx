import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('App', () => {
  render(React.createElement(App));

  screen.getByText(/Hello, wholeman!/);
});
