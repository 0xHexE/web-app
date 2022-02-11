import { SidebarItem } from '../../../../Type/SidebarItems';
import { FlexFiller } from '../../../../Styled/FlexFiller';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { StatefulTooltip, TRIGGER_TYPE } from 'baseui/tooltip';
import { useUpdateAtom } from 'jotai/utils';
import { selectedPopover } from '../../Atom/selectedPopover';

export interface RenderMiniSidebarItemProps {
  item: SidebarItem;
  isLastItem: boolean;
}

export function RenderMiniSidebarItem({
  item,
  isLastItem,
}: RenderMiniSidebarItemProps) {
  const [, $theme] = useStyletron();
  const setValue = useUpdateAtom(selectedPopover);

  switch (item.kind) {
    case 'spacer':
      return <FlexFiller />;

    case 'action':
      return (
        <Block paddingTop="scale400" margin="0 auto">
          <StatefulTooltip
            triggerType={TRIGGER_TYPE.hover}
            content={item.title}
            popoverMargin={14}
          >
            <Button
              size={SIZE.compact}
              kind={KIND.tertiary}
              onClick={(event) => {
                if (item.children) {
                  const clientRect = (
                    event.target as HTMLButtonElement
                  ).getBoundingClientRect();

                  setValue({
                    key: item.key,
                    isLastItem,
                    y: clientRect.y,
                    height: clientRect.height,
                  });
                }
              }}
              $style={{
                width: '100%',
                flexDirection: 'column',
                color: $theme.colors.primaryB,
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                ':hover': {
                  backgroundColor: 'rgba(255, 255, 255, .2)',
                },
              }}
            >
              {item.icon ? item.icon : item.title}
            </Button>
          </StatefulTooltip>
        </Block>
      );
  }

  return null;
}
