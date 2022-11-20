import React from 'react'

const ExpCategory = ({ data, handleSetTag, currentTag }) => {
  
    const {icon,category,description} = data
    
    return (
        <>
            <div className='skills_header' onClick={() => handleSetTag(category)}>
                <i className={`uil ${icon} skills_icon`}></i>
                <div>
                    <h1 className='skills_title'>{category}</h1>
                    <span className='skills_subtitle'>{description}</span>
                </div>
                <i className={`uil uil-angle-down skills_arrow ${category === currentTag ? 'uil-angle-right' : 'uil-angle-down' }`}></i>
            </div>
        </>
    )
}

export default ExpCategory