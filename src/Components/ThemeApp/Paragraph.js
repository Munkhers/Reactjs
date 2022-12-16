import React, { useContext } from 'react'
import { ThemeAppContext } from '.'


const Paragraph = () => {

    const { isDark } = useContext(ThemeAppContext)

    return (
        <div style={{ color: isDark ? 'black' : 'white', backgroundColor: isDark ? 'white' : 'black' }}>
            Random Paragraph
        </div>
    )
}
export default Paragraph