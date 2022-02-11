import { BaseWebProvider, DefaultLayout } from '@web-app/common-ui';
import { ToggleThemeButton } from '../../../../libs/common-ui/src/lib/BaseWeb/Component/ToggleButton';

export function App() {
  return (
    <BaseWebProvider>
      <DefaultLayout>
        <ToggleThemeButton />
      </DefaultLayout>
    </BaseWebProvider>
  );
}

export default App;
