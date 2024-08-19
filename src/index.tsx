import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './theme';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <RecoilRoot>
      <ThemeProvider theme={LightTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
);