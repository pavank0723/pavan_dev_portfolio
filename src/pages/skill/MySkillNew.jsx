import React from 'react'

const MySkillNew = ({ categ, tag }) => {
    return (
        categ.skills.map((item) => {
            const { _id, title, subtitle } = item
            return (
                tag === categ.name ? <div className='skills_data' key={_id}>
                    <div className='skills_title'>
                        <h3 className='skills_name'>{title}</h3>
                        
                    </div>

                    <div className='skills_bar'>
                        <span className='skills_percentage' style={{ width: `${subtitle}` }}></span>

                    </div>
                </div>
                    : null
            )
        })
    )
}

export default MySkillNew