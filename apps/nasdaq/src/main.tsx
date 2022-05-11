import { Provider } from 'overmind-react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { overmind } from './overmind/index';
import { GlobalStyles } from './utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const StockDetails = React.lazy(
  () => import('./components/stock-details/StockDetails')
);

root.render(
  // <StrictMode>
  <Provider value={overmind}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/stock-details/:id"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <StockDetails />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </Provider>
  // </StrictMode>
);
