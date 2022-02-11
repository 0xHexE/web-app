import { SidebarItemAction } from '../../Type/SidebarItems';
import { StatefulMenu } from 'baseui/menu';

export interface RenderMenuItemProps {
  items: SidebarItemAction[];
}

export function RenderMenuItem({ items }: RenderMenuItemProps) {
  return (
    <StatefulMenu
      overrides={{
        List: {
          style: {
            width: '230px',
          },
        },
      }}
      items={items.map((item) => {
        return {
          label: item.title,
          key: item.key,
        };
      })}
    />
  );
}
