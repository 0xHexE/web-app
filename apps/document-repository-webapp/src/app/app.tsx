import { BaseWebProvider, DefaultLayout } from '@web-app/common-ui';

export function App() {
  return (
    <BaseWebProvider>
      <DefaultLayout>
        <div />
      </DefaultLayout>
    </BaseWebProvider>
  );
}

export default App;
