import { SetStateAction, useRef, useState } from "react"

/**
 * Creates a state which updates only after a set delay has passed since its last modification
 * @param initialValue - initial value of the state
 * @param delay - delay in miliseconds
 */
export default function useDebouncedState<T>(initialValue: T, delay = 150) {
  const [debouncedValue, setDebouncedValue] = useState(initialValue)
  const timeoutFnRefs = useRef<NodeJS.Timeout[]>([])

  const setState = (newState: SetStateAction<T>) => {
    if (!setTimeout) setDebouncedValue(newState)

    //There's already an old timeout going
    while (timeoutFnRefs.current.length > 0) {
      const timeoutFnRef = timeoutFnRefs.current.pop()
      clearTimeout(timeoutFnRef)
    }

    const timeoutFn = setTimeout(() => {
      setDebouncedValue(newState)
    }, delay)
    timeoutFnRefs.current.push(timeoutFn)
  }

  return [debouncedValue, setState] as [T, (state: SetStateAction<T>) => void]
}
