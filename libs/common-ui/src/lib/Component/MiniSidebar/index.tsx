import { Block } from 'baseui/block';
import React from 'react';
import { useMiniSidebarItems } from './Context';
import { RenderMiniSidebarItem } from './Component/RenderMiniSidebarItem';
import { OverflowMenuMiniSidebarItem } from './Component/OverflowMenuMiniSidebarItem';

export function MiniSidebar() {
  const { items } = useMiniSidebarItems();

  return (
    <>
      <Block
        width="scale1600"
        display={['none', 'none', 'none', 'flex']}
        flexDirection="column"
        alignItems="center"
        backgroundColor="accent"
        position="absolute"
        top="0"
        bottom="0"
      >
        {items.map((item, index) => {
          return (
            <RenderMiniSidebarItem
              key={item.key}
              item={item}
              isLastItem={index === items.length - 1}
            />
          );
        })}

        <Block paddingBottom="scale400" />
      </Block>
      <OverflowMenuMiniSidebarItem />
    </>
  );
}
