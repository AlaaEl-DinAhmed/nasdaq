import { Provider } from 'overmind-react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { overmind } from './app/overmind/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </StrictMode>
);
