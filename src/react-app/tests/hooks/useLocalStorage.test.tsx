import { renderHook } from '@testing-library/react-hooks';
import useLocalStorage, { getItemStorage, setItemStorage } from '../../app/hooks/useLocalStorage';
import { describe, test, expect, afterEach } from 'vitest';

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key],
    setItem: (key: string, value: any) => {
      store[key] = String(value);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('useLocalStorage', () => {
  afterEach(() => localStorageMock.clear());

  test('returns initial value if key is not in local storage', () => {
    const initialValue = { name: 'Test Product', price: 9.99 };
    const { result } = renderHook(() => useLocalStorage('product', initialValue));

    expect(result.current[0]).toEqual(initialValue);
  });

  test('returns value from local storage if key exists', () => {
    const product = { name: 'Test Product', price: 9.99 };
    setItemStorage('product', product);
    const { result } = renderHook(() => useLocalStorage('product', { name: '', price: 0 }));

    expect(result.current[0]).toEqual(product);
  });

  test('sets and gets item from local storage', () => {
    const { result } = renderHook(() => useLocalStorage('product', { name: '', price: 0 }));

    const newProduct = { name: 'New Product', price: 19.99 };
    result.current[1](newProduct);

    expect(getItemStorage('product')).toEqual(newProduct);
  });

  test('sets function value in local storage', () => {
    const product = { name: '', price: 0 }
    const { result } = renderHook(() => useLocalStorage('product', product));

    result.current[1]((value) => value);

    expect(getItemStorage('product')).toEqual(product);
  });

});
