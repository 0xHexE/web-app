import { atomWithStorage } from 'jotai/utils';

export enum AppTheme {
  Dark = 'dark',
  Light = 'light',
}

export const appThemeAtom = atomWithStorage<AppTheme>(
  'appTheme',
  AppTheme.Light
);
