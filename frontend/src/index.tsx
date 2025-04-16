
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CircularProgress } from '@mui/material';

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
