import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      if (typeof window === 'object') {
        const value = window.localStorage.getItem(key);

        return value ? JSON.parse(value) : initialValue;
      } else {
        return initialValue;
      }
    } catch (error) {
      console.log(error);

      return initialValue;
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;

      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      setState(value);
    } catch (error) {
      console.log(error);
    }
  }

  return [state, setValue];
}

export default useLocalStorage;
