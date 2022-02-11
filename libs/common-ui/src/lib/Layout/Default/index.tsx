import React from 'react';
import { Block } from 'baseui/block';
import { MiniSidebar } from '../../Component/MiniSidebar';
import { Sidebar } from '../../Component/Sidebar';

export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Block minHeight="100vh" position="relative">
      <MiniSidebar />

      <Block
        flex={1}
        marginLeft={[0, 0, 0, 'scale1600']}
        flexDirection="row"
        display="flex"
      >
        <Sidebar />

        <Block padding="scale400">{children}</Block>
      </Block>
    </Block>
  );
}
