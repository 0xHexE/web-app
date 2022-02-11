import { render } from '@testing-library/react';
import { RenderMenuItem } from './index';
import { Menu16 } from '@carbon/icons-react';

describe('RenderMenuItem', function () {
  it('should render', function () {
    render(
      <RenderMenuItem
        items={[
          { icon: <Menu16 />, kind: 'action', title: 'test', key: 'test' },
        ]}
      />
    );
  });
});
