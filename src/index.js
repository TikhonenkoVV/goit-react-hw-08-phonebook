import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="/goit-react-hw-08-phonebook">
                    <ThemeProvider theme={theme}>
                        <Global styles={GlobalStyles} />
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
