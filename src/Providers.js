import React from 'react';
import { CorbadoProvider } from '@corbado/react';

const PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

const Providers = ({ children }) => (
  <CorbadoProvider projectId={PROJECT_ID} darkMode='off' theme='custom-theme' isDevMode>
    {children}
  </CorbadoProvider>
);

export default Providers;
