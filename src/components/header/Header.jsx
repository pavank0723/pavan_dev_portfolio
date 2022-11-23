import React, { useState } from 'react'
import Logo from "../../assets/icon_py2.png"
import LangMode from '../utils/LangMode'
import ThemeMode from '../utils/ThemeMode'

import { useTranslation } from 'react-i18next'

import "./header.css"

const Header = () => {
    const { t } = useTranslation()
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <header className='header'>
                <nav className='nav container'>
                    <a className='nav_logo'>
                        <img src={Logo} alt="" className='myLogo' />avan
                    </a>

                    <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
                        <ul className='nav_list grid'>
                            <li className='nav_item'>
                                <a href='#home' className='nav_link'>
                                    <i className='uil uil-estate nav_icon'></i>
                                    {t('home')}
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#about' className='nav_link'>
                                    <i className='uil uil-user nav_icon'></i>
                                    {t('about')}
                                </a>
                            </li>


                            <li className='nav_item'>
                                <a href='#skills' className='nav_link'>
                                    <i className='uil uil-layers nav_icon'></i>
                                    {t('skill')}
                                </a>
                            </li>


                            <li className='nav_item'>
                                <a href='#service' className='nav_link'>
                                    <i className='uil uil-briefcase-alt nav_icon'></i>
                                    {t('service')}
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#resume' className='nav_link'>
                                    <i className='uil uil-graduation-cap nav_icon'></i>
                                    {t('resume')}
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#portfolio' className='nav_link'>
                                    <i className='uil uil-link-h nav_icon'></i>
                                    {t('portfolio')}
                                </a>
                            </li>

                            {/* <li className='nav_item'>
                                <a href='#blog' className='nav_link'>
                                    <i className='uil uil-message nav_icon'></i>
                                    Blog
                                </a>
                            </li> */}

                            {/* <li className='nav_item'>
                                <a href='#certificate' className='nav_link'>
                                    <i className='uil uil-file-bookmark-alt nav_icon'></i>
                                    Certificate
                                </a>
                            </li> */}

                            <li className='nav_item'>
                                <a href='#contact' className='nav_link'>
                                    <i className='uil uil-message nav_icon'></i>
                                    {t('contact')}
                                </a>
                            </li>


                        </ul>

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