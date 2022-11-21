import React, { useState } from 'react'
import Logo from "../../assets/icon_py2.png"
import ThemeMode from '../utils/ThemeMode'

import "./header.css"

const Header = () => {
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
                                    Home
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#about' className='nav_link'>
                                    <i className='uil uil-user nav_icon'></i>
                                    About
                                </a>
                            </li>


                            <li className='nav_item'>
                                <a href='#skills' className='nav_link'>
                                    <i className='uil uil-layers nav_icon'></i>
                                    Skill
                                </a>
                            </li>


                            <li className='nav_item'>
                                <a href='#service' className='nav_link'>
                                    <i className='uil uil-briefcase-alt nav_icon'></i>
                                    Service
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#resume' className='nav_link'>
                                    <i className='uil uil-graduation-cap nav_icon'></i>
                                    Resume
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#portfolio' className='nav_link'>
                                    <i className='uil uil-link-h nav_icon'></i>
                                    Portfolio
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
                                    Contact
                                </a>
                            </li>


                        </ul>

                        <i className='uil uil-times nav_close' onClick={() => setToggle(!toggle)}></i>
                    </div>
                    <div className='nav_toggle_main'>
                        <ThemeMode />
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