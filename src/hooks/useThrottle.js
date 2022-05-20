
import { useCallback, useEffect, useState } from "react"
import useTimeout from "./useTimeout"

export const useThrottle = (callback, delay, dependencies) => {
    const [shouldWait, setShouldWait] = useState(false)
    const [waitingArgs, setWaitingArgs] = useState()
    const { reset, clear } = useTimeout(() => { setShouldWait(false); callback(...waitingArgs) }, delay)

    const throttleFunction = (...args) => {
        if (shouldWait) {
            setWaitingArgs(...args)
            return
        }
        setShouldWait(true)
        reset()
        return callback(...args)
    }

    return throttleFunction
}