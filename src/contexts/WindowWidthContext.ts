import React from 'react'
import { WindowWidthContextType } from '../types'

const defaultValue: WindowWidthContextType = {
  windowWidth: window.innerWidth
}

export const WindowWidthContext = React.createContext<WindowWidthContextType>(defaultValue)
