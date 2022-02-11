import { createContext, useContext } from 'react';
import { SidebarItem } from '../../../Type/SidebarItems';
import { Search24, UserProfile24 } from '@carbon/icons-react';

export const SidebarConfig = createContext<{
  title: string;
  items: SidebarItem[];
}>({
  title: 'Anthaathi Drive',
  items: [
    {
      kind: 'action',
      icon: <Search24 />,
      key: 'search',
      title: 'Search',
      children: [
        {
          kind: 'action',
          icon: <UserProfile24 />,
          key: 'profile1',
          title: 'Profile',
        },
      ],
    },
    {
      kind: 'spacer',
      key: 'spacer',
    },
    {
      kind: 'action',
      icon: <Search24 />,
      key: 'search2',
      title: 'Search',
      children: [
        {
          kind: 'action',
          icon: <UserProfile24 />,
          key: 'profile1',
          title: 'Profile',
        },
      ],
    },

    {
      kind: 'action',
      icon: <UserProfile24 />,
      key: 'profile',
      title: 'Profile',
      children: [
        {
          kind: 'action',
          icon: <UserProfile24 />,
          key: 'profile1',
          title: 'Profile',
        },
        {
          kind: 'action',
          icon: <UserProfile24 />,
          key: 'profile3',
          title: 'Profile',
        },
      ],
    },
  ],
});

export const useSidebarConfig = () => useContext(SidebarConfig);
