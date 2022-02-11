import { Block } from 'baseui/block';
import { SidebarTitle } from './Component/SidebarTitle';
import { SidebarContent } from './Component/SidebarContent';

export function Sidebar() {
  return (
    <Block width="280px" height="100vh" backgroundColor="backgroundSecondary">
      <SidebarTitle />

      <SidebarContent />
    </Block>
  );
}
