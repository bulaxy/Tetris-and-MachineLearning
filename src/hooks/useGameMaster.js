import { useEffect, useMemo } from "react"
import { TETROMINO } from "../constants/tetrisPieces"

export const useGameMaster = ({ mode }) => {
    const { keyDown: leftPressed } = useKeyPress('37')
    const { keyDown: upPressed } = useKeyPress('38')
    const { keyDown: rightPressed } = useKeyPress('39')
    const { keyDown: downPressed } = useKeyPress('40')

    useEffect(() => {
        if (!downPressed) return
        softDrop()

        let interval
        // After the first click, there is slight delay before it register as a hold
        let timeout = setTimeout(() => {
            softDrop()
            // Now, it regsitered as a hold, it will repeat in a faster way, need to be careful with all these functions since the state is now defined and stored, so external value cannot change it...
            interval = setInterval(() => softDrop(), 100)
        }, 500)
        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [downPressed])


    return {
        stage,
    }
}