import { renderHook } from '@testing-library/react-hooks';
import { useUpdateAppTheme } from './useUpdateAppTheme';

describe('useUpdateAppTheme', function () {
  it('should change the langauge', function () {
    renderHook(() => useUpdateAppTheme()());
  });
});
