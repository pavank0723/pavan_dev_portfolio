import React from 'react'

const WorkItems = ({ filteredImage }) => {
    return (
        <>

            {filteredImage.map((elem) => {
                const { id, image, title, demo } = elem
                return (
                    <div className='work_card' key={id}>

                        <img src={image} className='work_img' alt='' />

                        <h3 className='work_title'>{title}</h3>
                        <a href={demo} target='_blank' className='work_button'>
                            Demo <i className='uil uil-arrow-right work_button_icon'></i>
                        </a>
                    </div>

                )
            })}
        </>

    )
}

export default WorkItems