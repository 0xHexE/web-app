import { Button } from 'baseui/button';
import { Asleep20, AsleepFilled20 } from '@carbon/icons-react';
import { useAtomValue } from 'jotai/utils';
import { useUpdateAppTheme } from '../../Hooks/useUpdateAppTheme';
import { AppTheme, appThemeAtom } from '../../Atom/appTheme';

export function ToggleThemeButton() {
  const toggleTheme = useUpdateAppTheme();
  const appTheme = useAtomValue(appThemeAtom);

  return (
    <Button onClick={toggleTheme} data-testid="toggle-theme-button">
      {appTheme === AppTheme.Light ? <Asleep20 /> : <AsleepFilled20 />}
    </Button>
  );
}
