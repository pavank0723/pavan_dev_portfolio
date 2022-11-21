import React, { useState, useEffect } from 'react'
import './theme.css'
const ThemeMode = () => {
    const [theme, setTheme] = useState('dark-theme')

    const toggleTheme = () => {
        theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
    }
    useEffect(() => {
        document.body.className = theme
    }, [theme])
    return (
        <>
            <div className='theme'>
                <i className={`uil ${theme === 'dark-theme' ? 'uil-brightness' : 'uil-moon'} theme-icon `} onClick={() => toggleTheme()}></i>
            </div>

        </>
    )
}

export default ThemeMode