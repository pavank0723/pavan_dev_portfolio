import React from 'react'

const ExpCategoryNew = ({ data, handleSetTag, currentTag }) => {
  
    const {icon,name,description} = data
    
    return (
        <>
            <div className='skills_header' onClick={() => handleSetTag(name)}>
                <i className={`uil ${icon} skills_icon`}></i>
                <div>
                    <h1 className='skills_title'>{name}</h1>
                    <span className='skills_subtitle'>{description}</span>
                </div>
                <i className={`uil uil-angle-down skills_arrow ${name === currentTag ? 'uil-angle-right' : 'uil-angle-down' }`}></i>
            </div>
        </>
    )
}

export default ExpCategoryNew