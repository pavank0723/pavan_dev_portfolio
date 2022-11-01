import React from 'react'

const AboutBox = () => {
    return (
        <div className='about_boxes grid'>
            <div className='about_box'>

                <i className="about_icon fa-solid fa-bezier-curve"></i>
                <div>
                    <h3 className='about_title'>Freelancing</h3>
                    <span className='about_subtitle'>1+ year</span>
                </div>

            </div>
            <div className='about_box'>
                <i className='about_icon fa-solid fa-laptop-code'></i>
                <div>
                    <h3 className='about_title'>Completed</h3>
                    <span className='about_subtitle'>6+ Project</span>
                </div>

            </div>
            
            <div className='about_box'>
                <i className='about_icon fa-solid fa-cubes'></i>
                <div>
                    <h3 className='about_title'>Support</h3>
                    <span className='about_subtitle'>Online 24/7</span>
                </div>

            </div>

        </div>
    )
}

export default AboutBox