import { render } from '@testing-library/react';
import { RenderSidebarItem } from './index';
import { Menu16 } from '@carbon/icons-react';

describe('RenderSidebarItem', function () {
  it('should render', function () {
    const { baseElement: baseElement1 } = render(
      <RenderSidebarItem
        item={{ key: 'test', title: 'jas', icon: <Menu16 />, kind: 'action' }}
      />
    );

    expect(baseElement1).toMatchSnapshot();

    const { baseElement: baseElement2 } = render(
      <RenderSidebarItem
        item={{
          key: 'test',
          title: 'jas',
          icon: <Menu16 />,
          kind: 'action',
          children: [
            { key: 'test', title: 'jas', icon: <Menu16 />, kind: 'action' },
          ],
        }}
      />
    );
    expect(baseElement2).toMatchSnapshot();

    const { baseElement: baseElement3 } = render(
      <RenderSidebarItem
        rootRender={true}
        item={{
          key: 'test',
          title: 'jas',
          icon: <Menu16 />,
          kind: 'action',
          children: [
            { key: 'test', title: 'jas', icon: <Menu16 />, kind: 'action' },
          ],
        }}
      />
    );
    expect(baseElement3).toMatchSnapshot();

    const { baseElement: baseElement4 } = render(
      <RenderSidebarItem
        rootRender={true}
        item={{
          key: 'test',
          kind: 'spacer',
        }}
      />
    );
    expect(baseElement4).toMatchSnapshot();

    const { baseElement: baseElement5 } = render(
      <RenderSidebarItem
        rootRender={true}
        item={{
          key: 'test',
          kind: 'spaacer' as never,
        }}
      />
    );
    expect(baseElement5).toMatchSnapshot();
  });
});
