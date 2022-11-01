import React from 'react';


const CategoryButton = ({ catItem, handleSetTag, currentTag }) => {
    return (
        <>
            <div className='work_filters'>
                {
                    catItem.map((curElem, index) => {
                        return <span className={`work_item ${curElem === currentTag ? 'work_active' : ''}`} key={index} onClick={() => handleSetTag(curElem)}>{curElem}</span>
                    })
                }
            </div>

        </>

    )
}

export default CategoryButton
