import React from 'react'

const CategoryButton = () => {
  return (
    <>
        <div className={tabItem === 1 ? 'qualification_button qualification_active  button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification_icon'></i>Education

          </div>
    </>
  )
}

export default CategoryButton