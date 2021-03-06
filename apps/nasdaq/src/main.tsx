import { Provider } from 'overmind-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import { overmind } from './overmind/index';
import { GlobalStyles } from './utils';

const root = createRoot(document.getElementById('root') as HTMLElement);

const StockDetails = React.lazy(
  () => import('./layouts/stock-details/StockDetails')
);

const NotFound = React.lazy(() => import('./components/not-found/NotFound'));

root.render(
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
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </Provider>
);
