import React from 'react'

const CategoryButton = ({ filterItem, catItem }) => {
    return (
        <>
            <div className='work_filters'>
                {
                    catItem.map((curElem, index) => {
                        return <span className='work_item' key={index} onClick={() => filterItem(curElem)}>{curElem}</span>
                    })
                }
                {/* <span className='work_item' onClick={() => setWork(Menu)}>All</span> 
                <span className='work_item' onClick={() => filterItem("Mobile App")}>Mobile App</span>
                <span className='work_item' onClick={() => filterItem("Website")}>Website</span>
                <span className='work_item' onClick={() => filterItem("API")}>API</span>
                <span className='work_item' onClick={() => filterItem("UI Design")}>UI Design</span>*/}
            </div>
        </>
    )
}

export default CategoryButton
