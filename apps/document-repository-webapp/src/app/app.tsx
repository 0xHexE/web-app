import { DefaultLayout, useUpdateAppTheme } from '@web-app/common-ui';

export function App() {
  const theme = useUpdateAppTheme();

  return <DefaultLayout>Hello world</DefaultLayout>;
}

export default App;
