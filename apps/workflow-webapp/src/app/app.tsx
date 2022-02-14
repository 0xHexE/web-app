import { BaseWebProvider, DefaultLayout } from '@web-app/common-ui';
import { SidebarConfig } from '@web-app/common-ui';
import { useIntl } from 'react-intl';

export function App() {
  const intl = useIntl();

  return (
    <BaseWebProvider>
      <SidebarConfig.Provider
        value={{
          title: intl.formatMessage({ defaultMessage: 'Workflow' }),
          items: [],
        }}
      >
        <DefaultLayout>Hello world</DefaultLayout>
      </SidebarConfig.Provider>
    </BaseWebProvider>
  );
}

export default App;
