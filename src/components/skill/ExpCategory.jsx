import React from 'react'

const ExpCategory = ({ catSkill,catSkillIcon, handleSetTag, currentTag}) => {
    return (
        <>
            {
                catSkill.map((curCateSkill, index) => {
                    return (
                        <div className='skills_header' key={index} onClick={() => handleSetTag(curCateSkill)}>
                            <i className="uil uil-brackets-curly skills_icon" ></i>
                            <div>
                                <h1 className='skills_title'>{curCateSkill}</h1>
                                <span className='skills_subtitle'>More then 5+ year</span>
                            </div>
                            <i className={`uil uil-angle-down skills_arrow ${curCateSkill === currentTag ? 'uil-angle-right' : 'uil-angle-down' }`}></i>
                        </div>
                    )
                })

            }


            {/* <div className={isActive ? 'skills_header skills_active' : 'skills_header'} onClick={toggleClass}
                    data-toggle="tab">
                    <i className="uil uil-brackets-curly skills_icon" ></i>
                    <div>
                        <h1 className='skills_title'>Frontend Developer</h1>
                        <span className='skills_subtitle'>More then 5+ year</span>
                    </div>
                    <i className="uil uil-angle-down skills_arrow"></i>
                </div> */}

        </>
    )
}

export default ExpCategory