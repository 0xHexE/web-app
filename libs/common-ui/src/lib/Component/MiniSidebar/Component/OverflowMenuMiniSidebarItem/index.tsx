import { PLACEMENT, Popover } from 'baseui/popover';
import { useAtom } from 'jotai';
import { selectedPopover } from '../../Atom/selectedPopover';
import { useStyletron } from 'baseui';
import { RenderMenuItem } from '../../../RenderMenuItem';
import { useMiniSidebarItems } from '../../Context';
import { useMemo } from 'react';
import { SidebarItemAction } from '../../../../Type/SidebarItems';

// TODO: THERE IS ACCESSIBILITY ISSUE HERE
// When we press escape it will focus back
// to this span instead of the actual element
export function OverflowMenuMiniSidebarItem() {
  const [value, setValue] = useAtom(selectedPopover);
  const [css, $theme] = useStyletron();

  const { items } = useMiniSidebarItems();

  const selectedItem = useMemo(() => {
    if (!value) {
      return null;
    }

    return items.find((res) => res.key === value.key) as SidebarItemAction;
  }, [items, value]);

  const placement = useMemo(() => {
    if (value?.isLastItem) {
      return $theme.direction === 'ltr'
        ? PLACEMENT.leftBottom
        : PLACEMENT.rightBottom;
    }
    return $theme.direction === 'ltr'
      ? PLACEMENT.leftBottom
      : PLACEMENT.rightBottom;
  }, [$theme.direction, value?.isLastItem]);

  return (
    <Popover
      isOpen={Boolean(selectedItem?.children)}
      content={() => <RenderMenuItem items={selectedItem?.children || []} />}
      returnFocus
      autoFocus
      placement={placement}
      onClickOutside={() => {
        setValue(null);
      }}
      popoverMargin={0}
    >
      <span
        className={css({
          position: 'fixed',
          width: $theme.sizing.scale1600,
          top: `${value?.y || 0}px`,
          height: `${value?.height}px`,
        })}
      />
    </Popover>
  );
}
