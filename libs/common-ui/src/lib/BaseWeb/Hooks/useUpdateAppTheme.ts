import { useUpdateAtom } from 'jotai/utils';
import { AppTheme, appThemeAtom } from '@web-app/common-ui';

export function useUpdateAppTheme() {
  const updateAppTheme = useUpdateAtom(appThemeAtom);

  return () => {
    updateAppTheme((prev) =>
      prev === AppTheme.Dark ? AppTheme.Light : AppTheme.Dark
    );
  };
}
