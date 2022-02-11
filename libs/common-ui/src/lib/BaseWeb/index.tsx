import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, createDarkTheme, createLightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import React from 'react';
import { useAtomValue } from 'jotai/utils';
import { AppTheme, appThemeAtom } from './Atom/appTheme';
import { Block } from 'baseui/block';

const engine = new Styletron();

export interface BaseWebProviderProps {
  children: React.ReactNode;
}

const LightTheme = createLightTheme(
  {
    primaryFontFamily: "'IBM Plex Sans', sans-serif",
  },
  {}
);

const DarkTheme = createDarkTheme(
  {
    primaryFontFamily: "'IBM Plex Sans', sans-serif",
  },
  {}
);

export function BaseWebProvider({ children }: BaseWebProviderProps) {
  const theme = useAtomValue(appThemeAtom);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme === AppTheme.Dark ? DarkTheme : LightTheme}>
        <Block minHeight="100vh" backgroundColor="background" display="block">
          {children}
        </Block>
      </BaseProvider>
    </StyletronProvider>
  );
}
