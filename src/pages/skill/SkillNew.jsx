import React, { useEffect, useState, useTransition } from 'react'
import "./skill.css"
import MenuNew from './MenuNew'
import ExpCategoryNew from './ExpCategoryNew'
import MySkillNew from './MySkillNew'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getSkillList } from '../../services/actions/skillAction'


console.table(MenuNew)


// console.log(resArr);

const SkillNew = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const result = useSelector((state) => state.skillData)
    console.log("=====This is fatch data=====")
    console.log(typeof (MenuNew))

    console.log("API ==>>>>>>", typeof (result))

    console.log("API Skills ", result.map((i) => i.skills))

    const allSkill = MenuNew.map((i) => i.skills)
    const resultSkill = result.map((i) => i.skills)
    console.log("All Skills-------- ", allSkill)


    var resArr = [];
    result.forEach(function (item) {
        const { _id, name, icon, description, skills } = item
        var i = resArr.findIndex(x => x.name === name);
        var j = resArr.findIndex(y => y.icon === icon);
        var l = resArr.findIndex(l => l.description === description);
        var m = resArr.findIndex(m => m.skills === skills);
        if (i <= -1 || j <= -1 || l <= -1 || m <= -1) {
            resArr.push({ _id, name, icon, description, skills });
        }
    });
    console.log("All Category ====>>>>", resArr)

    const [skill, setSkill] = useState(resArr)

    const [tag, setTag] = useState('Frontend Development')

    const [filteredSkill, setFilteredSkill] = useState(resArr.map((i)=> i.skills))
    console.log("Filtered Skills ",filteredSkill)

    useEffect(() => {
        tag === 'Frontend Development' ? setFilteredSkill(skill.filter(item => item.name === 'Frontend Development')) : setFilteredSkill(skill.filter(item => item.name === tag))
    }, [tag])

    useEffect(() => {
        dispatch(getSkillList())
    }, [])


    const filterItem = () => {
    }

    return (
        <>
            <section className='skill container section' _id='skills'>
                <h2 className='section_title'>{t('skills')}</h2>
                <span className='section__subtitle'> {t('my_techical_skill')}</span>
                <div className='skills_container container grid'>
                    {/* Experience Tabs */}
                    <div className='skills_tabs'>
                        {
                            resArr.map((item, index) => {
                                return (
                                    <ExpCategoryNew key={index}
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
                    
                    <MySkillNew filteredSkill={filteredSkill} />

                    
                </div>
            </section>
        </>
    )
}

export default SkillNew