import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>

);
