import React from 'react'

const Info = () => {
    return (
        <>
            <div className='about_info'>
                <div className='about_box'>
                    <i className='uil uil-award-alt'></i>
                    <h3 className='about_title'>Freelancing</h3>
                    <span className='about_subtitle'>1+ year</span>
                </div>

                <div className='about_box'>
                    <i className='uil uil-briefcase-alt'></i>
                    <h3 className='about_title'>Completed</h3>
                    <span className='about_subtitle'>6+ Project</span>
                </div>

                <div className='about_box'>
                    <i className='uil uil-headphones'></i>
                    <h3 className='about_title'>Support</h3>
                    <span className='about_subtitle'>Online 24/7</span>
                </div>

            </div>

        </>
    )
}

export default Info