import React, { useContext, useEffect, useMemo, useState, useCallback } from "react"

const GridContext = React.createContext()
export const useGridContext = () => {
    return useContext(GridContext)
}

const EMPTY_GRID = Array(20).fill().map(() => Array(10).fill({ current, pieces }))
export default function Grid() {
    const [grid, setGrid] = useState(EMPTY_GRID)

    const
    return (
        <GridContext.Provider
            value={{
                settings,
                setSettings,
                setClassicMode
            }}
        >

        </GridContext.Provider>
    );
}
