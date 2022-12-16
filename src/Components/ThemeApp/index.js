import React, { createContext, useState } from 'react'
import ThemeButton from './Button'
import Paragraph from './Paragraph'


export const ThemeAppContext = createContext()

const ThemeApp = () => {
    const [isDark, setIsDark] = useState(true);
    
    return (
        <>
            <ThemeAppContext.Provider value={{ isDark, setIsDark }}>
                <Paragraph />
                <ThemeButton />
            </ThemeAppContext.Provider>
        </>
    )
}
export default ThemeApp