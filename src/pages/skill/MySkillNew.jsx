import React from 'react'

const MySkillNew = ({ filteredSkill }) => {
    return (
        <div className='skills_content'>
            <div className='skills_group'>
                <div className='skills_list grid'>
                    {filteredSkill.map((elem) => {
                        const { _id, title, subtitle } = elem
                        return (
                            <div className='skills_data' key={_id}>
                                <div className='skills_title'>
                                    <h3 className='skills_name'>{title}</h3>
                                    <span className='skills_number'>{subtitle}</span>
                                </div>

                                <div className='skills_bar'>
                                    <span className='skills_percentage' style={{ width: `${subtitle}` }}></span>

                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>




        </div>
    )
}

export default MySkillNew