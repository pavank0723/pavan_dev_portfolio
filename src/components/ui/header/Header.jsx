import React, { useState } from 'react'
import Logo from "../../../assets/icon_py2.png"
import LangMode from '../utils/LangMode'
import ThemeMode from '../utils/ThemeMode'

import { useTranslation } from 'react-i18next'

import "./header.css"
import NavMenu from './NavMenu'

const Header = () => {
    const { t } = useTranslation()
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <header className='header'>
                <nav className='nav container'>
                    <a className='nav_logo'>
                        <img src={Logo} alt="" className='myLogo' />{t('name_short')}
                    </a>

                    <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
                        <NavMenu />

                        <i className='uil uil-times nav_close' onClick={() => setToggle(!toggle)}></i>
                    </div>
                    <div className='nav_toggle_main'>
                        <div className='utils_container'>
                            <ThemeMode />
                            <LangMode />

                        </div>
                        <div className='nav_toggle' onClick={() => setToggle(!toggle)}>

                            <i className='uil uil-apps nav_icon'></i>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header