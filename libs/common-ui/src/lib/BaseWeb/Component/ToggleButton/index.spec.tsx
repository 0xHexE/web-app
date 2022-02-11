import {
  fireEvent,
  getByText,
  getByTestId,
  render,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../../../../apps/document-repository-webapp/src/app/app';

describe('BaseWeb', function () {
  it('should toggle theme', function () {
    const { container } = render(
      <BrowserRouter>
        <App />
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
