import React from 'react';

const CategoryButton = ({ catItem, handleSetTag, currentTag }) => {
    return (
        <>
                {
                    catItem.map((curElem, index) => {
                        return <span className={`certificate_item ${curElem === currentTag ? 'certificate_active' : ''}`} key={index} onClick={() => handleSetTag(curElem)}>{curElem}</span>
                    })
                }
        </>

    )
}

export default CategoryButton
