import { atom } from 'jotai';

export const selectedPopover = atom<{
  height: number;
  key: string | number;
  y: number;
  isLastItem: boolean;
} | null>(null);
