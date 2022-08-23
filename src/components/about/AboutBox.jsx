import React from 'react'

const AboutBox = () => {
    return (
        <div className='about_boxes grid'>
            <div className='about_box'>

                <i class="about_icon fa-solid fa-bezier-curve"></i>
                <div>
                    <h3 className='about_title'>10+</h3>
                    <span className='about_subtitle'>UI Design completed</span>
                </div>

            </div>
            <div className='about_box'>
                <i className='about_icon fa-solid fa-laptop-code'></i>
                <div>
                    <h3 className='about_title'>5+</h3>
                    <span className='about_subtitle'>Development Project </span>
                </div>

            </div>
            <div className='about_box'>
                <i class="about_icon fa-solid fa-mug-hot"></i>
                <div>
                    <h3 className='about_title'>15+</h3>
                    <span className='about_subtitle'>Satisfied clients</span>
                </div>

            </div>
            <div className='about_box'>
                <i className='about_icon fa-solid fa-cubes'></i>
                <div>
                    <h3 className='about_title'>20+</h3>
                    <span className='about_subtitle'>Logo Design completed</span>
                </div>

            </div>

        </div>
    )
}

export default AboutBox