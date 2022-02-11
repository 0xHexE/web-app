import { fireEvent, getByTestId, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ToggleThemeButton } from './index';

describe('BaseWeb', function () {
  it('should toggle theme', function () {
    const { container } = render(
      <BrowserRouter>
        <ToggleThemeButton />
      </BrowserRouter>
    );

    fireEvent(
      getByTestId(container, 'toggle-theme-button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
