import { useAtomValue } from 'jotai/utils';
import { appLanguageAtom } from '@web-app/common-ui';

export interface LanguageProviderProps {
  children: (lang: string) => JSX.Element | null;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps): JSX.Element | null {
  const language = useAtomValue(appLanguageAtom);

  return children(language);
}
