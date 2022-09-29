import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import Root from './root';
// import './index.css';
// import './fonts/Roboto-Black.ttf';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SnackbarProvider autoHideDuration={1000} maxSnack={3} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'}}>
      <Root />
    </SnackbarProvider>
  </StrictMode>,
);
