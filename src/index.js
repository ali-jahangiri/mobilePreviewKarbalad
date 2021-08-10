import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Provider/GlobalStyle';
import InitialLoading from './Provider/InitialLoading/InitialLoading';
import { StyleProvider } from './Provider/styleProvider';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <StyleProvider>
      <InitialLoading>
        <App />
      </InitialLoading>
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

