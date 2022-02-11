import { getAllByTestId, render } from '@testing-library/react';
import { RenderMiniSidebarItem } from './index';
import { Menu16 } from '@carbon/icons-react';

describe('RenderMiniSidebarItem', function () {
  it('should render mini sidebar item', function () {
    const { baseElement: baseElement2 } = render(
      <RenderMiniSidebarItem
        item={{ kind: 'action', icon: <Menu16 />, key: 'test', title: 'test' }}
        isLastItem={false}
      />
    );
    expect(baseElement2).toMatchSnapshot();

    const { baseElement } = render(
      <RenderMiniSidebarItem
        item={{ kind: 'action', icon: <Menu16 />, key: 'test', title: 'test' }}
        isLastItem={true}
      />
    );

    expect(baseElement).toMatchSnapshot();

    const { baseElement: baseElement3 } = render(
      <RenderMiniSidebarItem
        item={{ kind: 'spacer', key: 'test' }}
        isLastItem={true}
      />
    );

    expect(baseElement3).toMatchSnapshot();

    const { container } = render(
      <RenderMiniSidebarItem
        item={{ kind: 'action', key: 'test2', icon: <Menu16 />, title: 'test' }}
        isLastItem={true}
      />
    );

    expect(baseElement3).toMatchSnapshot();

    getAllByTestId(container, 'render-mini-sidebar-item');
  });
});
