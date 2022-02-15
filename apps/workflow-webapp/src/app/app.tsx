import { BaseWebProvider, DefaultLayout } from '@web-app/common-ui';
import { SidebarConfig } from '@web-app/common-ui';
import { useIntl } from 'react-intl';
import { Home20 } from '@carbon/icons-react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));

export function App() {
  const intl = useIntl();

  return (
    <BaseWebProvider>
      <Helmet>
        <title>
          {intl.formatMessage({ defaultMessage: 'Workflow | Anthaathi' })}
        </title>
      </Helmet>

      <SidebarConfig.Provider
        value={{
          title: intl.formatMessage({ defaultMessage: 'Workflow' }),
          items: [
            {
              kind: 'action',
              key: 'test',
              title: intl.formatMessage({ defaultMessage: 'testing' }),
              icon: <Home20 />,
              children: [
                {
                  kind: 'action',
                  key: 'test',
                  title: intl.formatMessage({ defaultMessage: 'Home' }),
                  icon: <Home20 />,
                },
              ],
            },
          ],
        }}
      >
        <DefaultLayout>
          <Suspense fallback={<div />}>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
          </Suspense>
        </DefaultLayout>
      </SidebarConfig.Provider>
    </BaseWebProvider>
  );
}

export default App;
