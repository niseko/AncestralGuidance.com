import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>
