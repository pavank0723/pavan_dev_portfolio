import React from 'react'

const WorkItems2 = ({ filteredImage }) => {
    return (
        <>
            <div className='work_container grid'>
                {filteredImage.map((elem) => {
                    const { id, image, title, category } = elem
                    return (
                        <div className='work_card' key={id}>
                            <div className='work_thumbnail'>
                                <img src={image} className='work_img' alt='' />
                                <div className='work_mask'></div>
                            </div>

                            <span className='work_category'>{category}</span>
                            <h3 className='work_title'>{title}</h3>
                            <a href='#' className='work_button'>
                                <i className='icon-link work_button-icon'></i>
                            </a>
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default WorkItems2