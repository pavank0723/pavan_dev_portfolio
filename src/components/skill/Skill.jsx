import React, { useEffect, useState } from 'react'
import "./skill.css"
import Menu from './Menu'
import ExpCategory from './ExpCategory'
import MySkill from './MySkill'


const allCategory = [...new Set(Menu.map((curElem) => curElem.category))]
const allCategoryIcon = [...new Set(Menu.map((curElem) => curElem.icon))]

console.table(allCategoryIcon)

// const data = Menu.icon.map((e, i) => {
//     return { icon: e, description: Menu.description[i] }
// })

const Skill = () => {
    const [skill, setSkill] = useState(Menu)
    const [catSkill, setCatSkill] = useState(allCategory)
    const [catSkillIcon, setCatSkillIcon] = useState(allCategoryIcon)

    const [tag, setTag] = useState('Frontend Development')

    const [filteredSkill, setFilteredSkill] = useState([])

    useEffect(() => {
        tag === 'Frontend Development' ? setFilteredSkill(skill.filter(item => item.category === 'Frontend Development')) : setFilteredSkill(skill.filter(item => item.category === tag))
    }, [tag])

    const filterItem = (categorySkill) => {
        const updatedSkills = Menu.filter((curElem) => {
            return curElem.category === categorySkill
        })

        setSkill(updatedSkills)
    }
    return (
        <>
            <section className='skill container section' id='skills'>
                <h2 className='section_title'>My Experience </h2>
                <div className='skills_container container grid'>
                    {/* Experience Tabs */}
                    <div className='skills_tabs'>
                        <ExpCategory
                            filterItem={filterItem}
                            catSkill={catSkill}
                            handleSetTag={setTag}
                            catSkillIcon={catSkillIcon}
                            currentTag={tag}
                        />

                    </div>

                    {/* Experience in Skills */}
                    <MySkill filteredSkill={filteredSkill} />

                </div>
            </section>
        </>
    )
}

export default Skill