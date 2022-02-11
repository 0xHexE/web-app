import { createContext, useContext } from 'react';
import { SidebarItem } from '../../../Type/SidebarItems';

export const SidebarConfig = createContext<{
  title: string;
  items: SidebarItem[];
}>({
  title: 'Anthaathi Drive',
  items: [],
});

export const useSidebarConfig = () => useContext(SidebarConfig);
