import { render } from '@testing-library/react';
import { SidebarContent } from './index';
import { SidebarConfig } from '../../Context/SidebarConfig';

describe('SidebarContent', function () {
  it('should render', function () {
    render(
      <SidebarConfig.Provider
        value={{
          title: 'something',
          items: [
            {
              title: 'soemt',
              key: 'test',
              kind: 'action',
              children: [{ title: 'soemt', key: 'test', kind: 'action' }],
            },
          ],
        }}
      >
        <SidebarContent />
      </SidebarConfig.Provider>
    );
  });
});
