import { useEffect, useState } from "react";

export const useLocalState = (key: string, initial = "") => {
  const [value, setValue] = useState(() => {
    if (typeof window !== undefined && window.localStorage) {
      const saved = window.localStorage.getItem(key);

      if (null == saved) return initial;

      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return initial;
        }
      }
    }
    return initial;
  });

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
