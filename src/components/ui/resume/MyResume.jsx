import React from 'react'

const MyResume = ({ filteredItem }) => {
    return (
        <>
            <div className='qualification_content qualification_content_active'>
                {
                    filteredItem.map((elem, index) => {
                        const { title, subtitle, year } = elem
                        const i = index + 1
                        return (
                            i % 2 === 0 ?

                                <div className='qualification_data' key={index}>
                                    <div></div>
                                    <div>
                                        <span className='qualification_rounder'></span>
                                        <span className='qualification_line'></span>
                                    </div>
                                    <div className='qualification_main_data'>
                                        <h3 className='qualification_title'>{title}</h3>
                                        <span className='qualification_subtitle'>{subtitle}</span>
                                        <div className='qualification_calendar'>
                                            <i className='uil uil-calendar-alt'></i>{year}
                                        </div>
                                    </div>
                                </div>
                                : <div className='qualification_data' key={index}>
                                    <div className='qualification_main_data'>
                                        <h3 className='qualification_title'>{title}</h3>
                                        <span className='qualification_subtitle'>{subtitle}</span>
                                        <div className='qualification_calendar'>
                                            <i className='uil uil-calendar-alt'></i>{year}
                                        </div>
                                    </div>
                                    <div>
                                        <span className='qualification_rounder'></span>
                                        <span className='qualification_line'></span>
                                    </div>

                                </div>
                        )

                    })
                }
            </div>

        </>
    )
}
export default MyResume