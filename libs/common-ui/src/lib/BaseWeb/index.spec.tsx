import { render } from '@testing-library/react';
import App from '../../../../../apps/document-repository-webapp/src/app/app';
import { BaseWebProvider } from '@web-app/common-ui';

describe('BaseWeb', () => {
  it('should hook work', () => {
    const { baseElement } = render(
      <BaseWebProvider>
        <App />
      </BaseWebProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
