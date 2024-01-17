import { useEffect, DependencyList } from 'react'
import { ROLE } from './constant'
export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: any,
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps)
    }, waitTime)

    return () => {
      clearTimeout(t)
    }
  }, deps)
}
