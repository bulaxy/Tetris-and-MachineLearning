import { useMemo } from "react"
import { TETROMINO } from "../constants/tetrisPieces"

const randomPiece = () => {
    return TETROMINO[Object.keys(TETROMINO)[Math.floor(Math.random() * Object.keys(TETROMINO).length)]]
}

export const usePlayer = ({ mode }) => {
    const [position, setPosition] = useState({ x: undefined, y: undefined })
    const [collidedOn, setCollidedOn] = useState(0)




}