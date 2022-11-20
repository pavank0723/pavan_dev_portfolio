import React, { useEffect, useState } from 'react'
import "./skill.css"
import Menu from './Menu'
import ExpCategory from './ExpCategory'

import MySkill from './MySkill'


console.table(Menu)

var resArr = [];
    Menu.forEach(function(item){
        var i = resArr.findIndex(x => x.category == item.category);
        var j = resArr.findIndex(y => y.icon == item.icon);
        var l = resArr.findIndex(l => l.description == item.description);
        if(i <= -1 || j <= -1 || l <= -1){
          resArr.push({id:item.id, category:item.category, icon:item.icon, description:item.description});
        }
      });
      console.log(resArr);

const Skill = () => {
    const [skill, setSkill] = useState(Menu)

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
                <h2 className='section_title'>Skills</h2>
                <span className='section__subtitle'> My technical skills</span>
                <div className='skills_container container grid'>
                    {/* Experience Tabs */}
                    <div className='skills_tabs'>
                        {
                            resArr.map((item, index) => {
                                return (
                                    <ExpCategory key={index}
                                        data={item}
                                        filterItem={filterItem}
                                        handleSetTag={setTag}
                                        currentTag={tag}
                                    />
                                )
                            })
                        }

                    </div>

                    {/* Experience in Skills */}
                    <MySkill filteredSkill={filteredSkill} />

                </div>
            </section>

            
        </>
    )
}

export default Skill