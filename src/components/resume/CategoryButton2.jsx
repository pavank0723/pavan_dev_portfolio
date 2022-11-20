import React from 'react'

const CategoryButton2 = ({ data, handleSetTab, currentTab }) => {
  const {icon, category} = data
  return (
    <>
      <div className={category === currentTab ? 'qualification_button qualification_active  button_flex' : 'qualification_button button_flex'} onClick={() => handleSetTab(category)}>
        <i className={`uil ${icon} qualification_icon`}></i>{category}

      </div>
      
    </>
  )
}

export default CategoryButton2