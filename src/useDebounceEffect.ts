import { useEffect } from "react";
export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: any
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.call(deps);
    }, waitTime);

    return () => {
      clearTimeout(t);
    };
  }, deps);
}
