
import { useMemo } from "react"
import { TETROMINO } from "../constants/tetrisPieces"

const EMPTY_GRID = Array(20).fill().map(() => Array(10).fill({ current, pieces }))

export const usePlayGrid = ({ mode }) => {
    const [grid, setGrid] = useState(EMPTY_GRID)
    const { currentPosition, currentPiece } = usePlayer({ mode })

    const currentGridState = useMemo(() => {
        // If no pieces
        if (!currentPiece) return grid


    }, [currentPiece, currentPosition, grid])


}