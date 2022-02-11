import { useSidebarConfig } from '../../Context/SidebarConfig';
import { RenderSidebarItem } from '../RenderSidebarItem';
import { Accordion } from 'baseui/accordion';

export function SidebarContent() {
  const { items } = useSidebarConfig();

  return (
    <Accordion
      accordion
      overrides={{ Root: { style: { flexGrow: 1 } } }}
      // TODO: THIS NEEDS TO CHANGE TO ACTIVE ONE
      initialState={{ expanded: [items?.[0]?.key] }}
    >
      {items.map((item) => {
        return (
          <RenderSidebarItem item={item} rootRender={true} key={item.key} />
        );
      })}
    </Accordion>
  );
}
