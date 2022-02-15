import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '@web-app/common-ui';
import { IntlProvider } from 'react-intl';
import DefaultLang from '../../assets/locales/en-US.json';
import React, { StrictMode } from 'react';

export interface BaseProvidersProps {
  children: React.ReactNode;
}

export function BaseProviders({ children }: BaseProvidersProps) {
  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <LanguageProvider>
            {(lang) => {
              return (
                <IntlProvider locale={lang} messages={DefaultLang}>
                  {children}
                </IntlProvider>
              );
            }}
          </LanguageProvider>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
