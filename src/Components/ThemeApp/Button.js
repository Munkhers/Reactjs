import React, { useContext } from 'react'
import { ThemeAppContext } from '.'


const ThemeButton = () => {

    const { isDark, setIsDark } = useContext(ThemeAppContext)

    return (
        <div>
            <button onClick={() => { setIsDark(!isDark) }}>{isDark ? 'Dark theme' : 'White theme'}</button>
        </div>
    )
}
export default ThemeButton