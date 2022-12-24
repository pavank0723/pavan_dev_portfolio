import { useTranslation } from 'react-i18next'
const NavMenu = () => {
    const { t } = useTranslation()
    return (
        <>
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
        </>
    )
}

export default NavMenu