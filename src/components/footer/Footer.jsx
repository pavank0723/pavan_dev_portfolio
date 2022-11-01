import React from 'react'
import './footer.css'
import Logo from '../../assets/icon_py2.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container container'>
                <h1 className='footer_title'>
                    <img src={Logo} alt="" className='myLogo' />avan
                </h1>
                <ul className='footer_list'>
                    <li>
                        <a href='#about' className='footer_link'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='footer_link'>Project</a>
                    </li>
                    <li>
                        <a href='' className='footer_link'>Testimonial</a>
                    </li>


                </ul>

                <div className='footer_social'>
                    <a href="https://github.com/pavank0723/" className='footer_social_link' target="_blank">
                        <i className='uil uil-github-alt'></i>
                    </a>

                    <a href="https://www.linkedin.com/" className='footer_social_link' target="_blank">
                        <i className='uil uil-linkedin-alt'></i>
                    </a>
                    <a href="https://www.instagram.com/pavan_work_0723/" className='footer_social_link' target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
                <span className='footer_copyright'>&#169; Pavan Yadav. All rights reserved</span>

            </div>

        </footer>
    )
}

export default Footer