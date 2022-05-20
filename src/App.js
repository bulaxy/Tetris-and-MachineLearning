import React, { useContext, useEffect, useMemo, useState, useCallback } from "react"
import useLocalStorage from "./hooks/useLocalStorage"
import { CLASSIC_MODE } from './constants'


const AppContext = React.createContext()

export const useSettingContext = () => {
  return useContext(AppContext)
}

function App() {
  const [settings, setSettings] = useLocalStorage('tetris-setting', {})
  const [records, setRecords] = useLocalStorage('tetris-records', [])

  const setClassicMode = () => {
    setSettings(prev => ({ prev, ...CLASSIC_MODE }))
  }

  const newRecord = (obj) => {
    setRecords(prev => [...prev, obj])
  }

  const deleteRecord = (id) => {
    setRecords(prev => prev.filter(o => o.id === id))
  }

  const bestRecords = useMemo(() => {
    return records.sort((a, b) => a.score - b.score).slice(0, 9)
  }, records)

  return (
    <AppContext.Provider
      value={{
        settings,
        setSettings,
        setClassicMode,
        records,
        newRecord,
        deleteRecord,
        bestRecords
      }}
    >

    </AppContext.Provider>
  );
}

export default App;
