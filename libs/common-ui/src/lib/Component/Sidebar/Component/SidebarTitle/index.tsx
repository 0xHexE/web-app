import { Block } from 'baseui/block';
import { AppIcon } from '../../../../Icon/AppIcon';
import { HeadingXSmall } from 'baseui/typography';
import { useSidebarConfig } from '../../Context/SidebarConfig';
import { FlexFiller } from '../../../../Styled/FlexFiller';

export function SidebarTitle() {
  const { title } = useSidebarConfig();

  return (
    <Block
      paddingLeft="scale400"
      paddingRight="scale400"
      paddingTop="scale400"
      paddingBottom="scale400"
      backgroundColor="backgroundInversePrimary"
      display="flex"
      alignItems="center"
      alignContent="center"
      overrides={{
        Block: {
          style: { userSelect: 'none' },
        },
      }}
    >
      <AppIcon width="48px" />

      <HeadingXSmall margin="0" color="backgroundPrimary">
        {title}
      </HeadingXSmall>

      <FlexFiller />
    </Block>
  );
}
