import React, { useContext, useEffect, useMemo, useState, useCallback } from "react"
import Cell from './Cell'

const GridContext = React.createContext()
export const useGridContext = () => {
    return useContext(GridContext)
}

export default function Grid() {

    return (
        <GridContext.Provider
            value={{
                settings,
                setSettings,
                setClassicMode
            }}
        >
            {grid.map(row => row.map(cell => <Cell type={cell} />))}
        </GridContext.Provider>
    );
}
