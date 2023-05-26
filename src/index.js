import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
                <ThemeProvider theme={theme}>
                    <Global styles={GlobalStyles} />
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
