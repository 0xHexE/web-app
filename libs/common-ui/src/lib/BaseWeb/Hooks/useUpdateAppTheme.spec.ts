import { renderHook } from '@testing-library/react-hooks';
import { useUpdateAppTheme } from '@web-app/common-ui';

describe('useUpdateAppTheme', function () {
  it('should change the langauge', function () {
    renderHook(() => useUpdateAppTheme()());
  });
});
