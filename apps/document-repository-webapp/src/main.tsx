import { Provider as JotaiProvider } from 'jotai';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { BaseWebProvider } from '@web-app/common-ui';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <JotaiProvider>
        <BaseWebProvider>
          <App />
        </BaseWebProvider>
      </JotaiProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
