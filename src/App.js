import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import './App.scss';
import { useTranslation } from 'react-i18next';
import { ModalsProvider } from './components';
import { AuthProvider } from './contexts/JWTAuthContext';
import routes, { RenderRoutes } from './routes';

function App() {
  const { i18n } = useTranslation();

  return (
    <div>
      <SnackbarProvider
        maxSnack={12}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <BrowserRouter>
          <AuthProvider>
            <RenderRoutes routes={routes} />
            <ModalsProvider />
          </AuthProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
