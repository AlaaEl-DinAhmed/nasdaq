import { Provider } from 'overmind-react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import StockDetails from './components/stock-details/StockDetails';
import { overmind } from './overmind/index';
import { GlobalStyles } from './utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider value={overmind}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/stock-details/:id" element={<StockDetails />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </Provider>
  </StrictMode>
);
