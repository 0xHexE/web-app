import { createContext, useContext } from 'react';
import { SidebarItem } from '../../../Type/SidebarItems';
import { Rocket24, Search24, UserProfile24 } from '@carbon/icons-react';

export const MiniSidebarItems = createContext<{ items: SidebarItem[] }>({
  items: [
    {
      kind: 'action',
      icon: <Rocket24 />,
      key: 'rocket',
      title: 'Home',
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
          key: 'profile2',
          title: 'Profile',
        },
      ],
    },
  ],
});

export const useMiniSidebarItems = () => useContext(MiniSidebarItems);
