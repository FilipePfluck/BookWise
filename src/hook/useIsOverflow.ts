import { useState, useLayoutEffect, MutableRefObject } from 'react'

export const useIsOverflow = (ref: MutableRefObject<any>) => {
  const [hasOverflowed, setHasOverflowed] = useState(false)

  useLayoutEffect(() => {
    const { current } = ref

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight

      console.log({
        hasOverflow,
        scrollHeight: current.scrollHeight,
        clientHeight: current.clientHeight,
      })

      setHasOverflowed(hasOverflow)
    }

    if (current) {
      trigger()
    }
  }, [ref])

  return hasOverflowed
}
