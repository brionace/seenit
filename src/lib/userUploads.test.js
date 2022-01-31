import {renderHook, act} from '@testing-library/react-hooks'
import useUploads from "./useUploads"

test('fetches a number of uploads', () => {
    const { result } = renderHook(() => useUploads(10))


    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.list).toStrictEqual([]);

})