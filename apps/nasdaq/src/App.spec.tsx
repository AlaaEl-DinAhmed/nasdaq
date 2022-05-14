import { render } from '@testing-library/react';
import { createOvermindMock } from 'overmind';
import App from './App';
import { Status } from './interfaces/status-api';
import { config } from './overmind/stocks';
describe('App', () => {
  let overmind;

  beforeEach(() => {
    overmind = createOvermindMock(config, {
      api: {
        getStocks() {
          return Promise.resolve({
            results: [],
            next_url: 'string',
            status: Status.ok,
          });
        },
        getMoreStocks() {
          return Promise.resolve({
            results: [],
            next_url: 'string',
            status: Status.ok,
          });
        },
      },
    });
  });
  it('Should render App component', () => {
    render(<App />);
  });
});
