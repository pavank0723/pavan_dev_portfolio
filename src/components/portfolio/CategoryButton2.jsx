import React from 'react';
import "./new_portfolio.css";

const CategoryButton2 = ({ catItem, handleSetTag,currentTag}) => {
    return (
        <>
            <div className='work_filters'>
                {
                    catItem.map((curElem, index) => {
                        return <span className={`work_item ${curElem === currentTag ? 'work_active' : ''}`} key={index} onClick={() => handleSetTag(curElem)}>{curElem}</span>
                    })
                }
                

                {/* {
                    catItem.map((curElem, index) => {
                        return <span className='work_item' key={index} onClick={() => filterItem(curElem)}>{curElem}</span>
                    })
                } */}
                {/* <span className='work_item' onClick={() => setWork(Menu)}>All</span> 
                <span className='work_item' onClick={() => filterItem("Mobile App")}>Mobile App</span>
                <span className='work_item' onClick={() => filterItem("Website")}>Website</span>
                <span className='work_item' onClick={() => filterItem("API")}>API</span>
                <span className='work_item' onClick={() => filterItem("UI Design")}>UI Design</span>*/}
            </div>
            
        </>
        
    )
}

export default CategoryButton2
