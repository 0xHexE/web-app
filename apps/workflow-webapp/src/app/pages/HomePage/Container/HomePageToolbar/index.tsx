import { Block } from 'baseui/block';
import { useIntl } from 'react-intl';
import { LabelLarge } from 'baseui/typography';
import { FlexFiller } from '@web-app/common-ui';
import { Button } from 'baseui/button';
import { Link } from 'react-router-dom';

export function HomePageToolbar() {
  const intl = useIntl();

  return (
    <Block
      height="scale1600"
      display="flex"
      alignItems="center"
      paddingLeft="scale800"
      paddingRight="scale800"
    >
      <LabelLarge>
        {intl.formatMessage({ defaultMessage: 'Workflows' })}
      </LabelLarge>
      <FlexFiller />
      <Button $as={Link} {...{ to: '/create' }}>
        {intl.formatMessage({ defaultMessage: 'Create workflow' })}
      </Button>
    </Block>
  );
}
