import { Button } from 'baseui/button';
import { Asleep20, AsleepFilled20 } from '@carbon/icons-react';
import { AppTheme, appThemeAtom, useUpdateAppTheme } from '@web-app/common-ui';
import { useAtomValue } from 'jotai/utils';

export function ToggleThemeButton() {
  const toggleTheme = useUpdateAppTheme();
  const appTheme = useAtomValue(appThemeAtom);

  return (
    <Button onClick={toggleTheme} data-testid="toggle-theme-button">
      {appTheme === AppTheme.Light ? <Asleep20 /> : <AsleepFilled20 />}
    </Button>
  );
}
