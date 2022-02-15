import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import DefaultLang from './assets/locales/en-US.json';
import { LanguageProvider } from '@web-app/common-ui';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          {(lang) => {
            return (
              <IntlProvider locale={lang} messages={DefaultLang}>
                <App />
              </IntlProvider>
            );
          }}
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
