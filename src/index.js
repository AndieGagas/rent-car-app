// -------------------- Library React & Router --------------------
import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'; //Import App.js as Router

// -------------------- Library UI Framework --------------------
import { ThemeProvider } from '@mui/material/styles';
import theme from './Asset/Custom Theme/ThemeComponents'
import './index.css'; // Tailwind Custom Style

// -------------------- Library React Redux --------------------
import { Provider } from 'react-redux';
import { store } from './Store/Store'

const container = document.getElementById('root')
const root      = ReactDOMClient.createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>       
    </Provider>
  </BrowserRouter>,
);
