import { SidebarItem } from '../../../../Type/SidebarItems';
import { Block } from 'baseui/block';
import { Panel } from 'baseui/accordion';
import { useStyletron } from 'baseui';
import { FlexFiller } from '../../../../Styled/FlexFiller';

export interface RenderSidebarItemProps {
  item: SidebarItem;
  rootRender?: boolean;
}

export function RenderSidebarItem({
  item,
  rootRender = false,
  ...props
}: RenderSidebarItemProps) {
  const [css, $theme] = useStyletron();

  switch (item.kind) {
    case 'action':
      if (rootRender) {
        return (
          <Panel
            title={item.title}
            {...props}
            overrides={{
              Header: {
                style: {
                  fontSize: '14px',
                  color: $theme.colors.contentTertiary,
                  paddingLeft: $theme.sizing.scale400,
                  paddingTop: $theme.sizing.scale400,
                  paddingBottom: $theme.sizing.scale400,
                  paddingRight: $theme.sizing.scale400,
                },
              },
              PanelContainer: {
                style: { borderBottomWidth: '0' },
              },
              Content: {
                style: {
                  paddingLeft: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingRight: 0,
                },
              },
            }}
          >
            <Block width="100%" display="flex" flexDirection="column">
              {item.children?.map((res) => (
                <RenderSidebarItem key={res.key} item={res} />
              ))}
            </Block>
          </Panel>
        );
      } else {
        return (
          <Block
            display="flex"
            alignItems="center"
            height="48px"
            paddingLeft="scale400"
            paddingRight="scale400"
            overrides={{
              Block: {
                style: {
                  cursor: 'pointer',
                  userSelect: 'none',
                  ':hover': {
                    backgroundColor: $theme.colors.backgroundSecondary,
                    transitionDuration: '350ms',
                    transitionProperty: 'background-color',
                  },
                },
              },
            }}
          >
            {item.icon}

            <span className={css({ width: '12px' })} />

            {item.title}
          </Block>
        );
      }
    case 'spacer':
      return <FlexFiller />;
  }

  return null;
}
