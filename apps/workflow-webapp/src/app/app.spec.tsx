import { render } from '@testing-library/react';

import App from './app';
import { BaseProviders } from '../components/BaseProviders';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BaseProviders>
        <App />
      </BaseProviders>
    );

    expect(baseElement).toBeTruthy();
  });
});
