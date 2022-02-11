import { render } from '@testing-library/react';
import { BaseWebProvider } from './index';
import { ToggleThemeButton } from './Component/ToggleButton';

describe('BaseWeb', () => {
  it('should hook work', () => {
    const { baseElement } = render(
      <BaseWebProvider>
        <div>
          <ToggleThemeButton />
        </div>
      </BaseWebProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
