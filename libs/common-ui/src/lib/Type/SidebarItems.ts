import React from 'react';

export type SidebarItem = SidebarItemCommon &
  (SidebarItemAction | SidebarItemWidget);

export interface SidebarItemCommon {
  key: string | number;
}

export interface SidebarItemAction extends SidebarItemCommon {
  kind: 'action';
  title: React.ReactNode | string;
  icon?: React.ReactNode;

  children?: SidebarItemAction[];
}

export interface SidebarItemWidget extends SidebarItemCommon {
  kind: 'spacer';
}
