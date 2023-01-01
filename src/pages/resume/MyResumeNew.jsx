import React from 'react'

const MyResumeNew = ({ categ, tab }) => {
    return (
        <>
            {
                categ.qualification.map((elem, index) => {
                    const { title, subtitle, start_year, end_year } = elem
                    const i = index + 1
                    return (
                        tab === categ.name ?
                        i % 2 === 0
                            ? <div className='qualification_data' key={index}>
                                <div></div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>
                                <div className='qualification_main_data'>
                                    <h3 className='qualification_title'>{title}</h3>
                                    <span className='qualification_subtitle'>{subtitle}</span>
                                    <div className='qualification_calendar'>
                                        <i className='uil uil-calendar-alt'></i>{start_year} - {end_year}
                                    </div>
                                </div>
                            </div>
                            : <div className='qualification_data' key={index}>
                                <div className='qualification_main_data'>
                                    <h3 className='qualification_title'>{title}</h3>
                                    <span className='qualification_subtitle'>{subtitle}</span>
                                    <div className='qualification_calendar'>
                                        <i className='uil uil-calendar-alt'></i>{start_year} - {end_year}
                                    </div>
                                </div>
                                <div>
                                    <span className='qualification_rounder'></span>
                                    <span className='qualification_line'></span>
                                </div>

                            </div>
                            :null
                    )

                })
            }

        </>
    )
}
export default MyResumeNew