import React from 'react'

const CategoryButtonNew = ({ data, handleSetTab, currentTab }) => {
  const {icon, name} = data
  return (
    <>
      <div className={name === currentTab ? 'qualification_button qualification_active  button_flex' : 'qualification_button button_flex'} onClick={() => handleSetTab(name)}>
        <i className={`uil ${icon} qualification_icon`}></i>{name}
      </div>
    </>
  )
}

export default CategoryButtonNew