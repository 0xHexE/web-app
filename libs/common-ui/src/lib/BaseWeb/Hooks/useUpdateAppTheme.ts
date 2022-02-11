import { useUpdateAtom } from 'jotai/utils';
import { AppTheme, appThemeAtom } from '../Atom/appTheme';

export function useUpdateAppTheme() {
  const updateAppTheme = useUpdateAtom(appThemeAtom);

  return () => {
    updateAppTheme((prev) =>
      prev === AppTheme.Dark ? AppTheme.Light : AppTheme.Dark
    );
  };
}
