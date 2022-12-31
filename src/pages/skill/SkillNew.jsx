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
    const skillCategory = resArr.map((i) => i.name)

    console.log("All Category ====>>>>", skillCategory)

    const [tag, setTag] = useState('Frontend Development')   

    useEffect(() => {
        dispatch(getSkillList())
    }, [])

    return (
        <>
            <section className='skill container section' _id='skills'>
                <h2 className='section_title'>{t('skills')}</h2>
                <span className='section__subtitle'> {t('my_techical_skill')}</span>
                <div className='skills_container container grid'>

                    <div className='skills_tabs'>
                        {
                            resArr.map((item, index) => {
                                return (
                                    <ExpCategoryNew key={index}
                                        data={item}
                                        handleSetTag={setTag}
                                        currentTag={tag}
                                    />
                                )
                            })
                        }

                    </div>
                    
                    {/* <MySkillNew filteredSkill={filteredSkill} /> */}

                    <div className='skills_content'>
                        {
                            resArr.map((categ, index) => {
                                return <div className='skills_group' key={index}>
                                    <div className='skills_list grid'>
                                        {
                                            categ.skills.map((item, index) => {
                                                const { _id, title, subtitle } = item
                                                console.log("Title ===> ", title)
                                                console.log("Subtitle ==> ", subtitle)
                                                return (
                                                    tag == categ.name?<div className='skills_data' key={index}>
                                                        <div className='skills_title'>
                                                            <h3 className='skills_name'>{title}</h3>
                                                            {/* <span className='skills_number'>{subtitle}</span> */}
                                                        </div>

                                                        <div className='skills_bar'>
                                                            <span className='skills_percentage' style={{ width: `${subtitle}` }}></span>

                                                        </div>
                                                    </div>
                                                    :null
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </section>

            {/* <div className='skill container section' _id='skills'>
                <div className='skills_container container grid'>
                    <div className='skills_tabs'>
                        <ul className='skills_header'>
                            {
                                resArr.map((category, index) => {
                                    return (
                                        <>
                                            <li key={index} onClick={() => handleSkill(category.name)}>{category.name}</li>
                                            <ul className='skills_content'>
                                                {
                                                    category.skills.map((item, index) => {
                                                        return (
                                                            tag == category.name ? <li key={index}>{item.title}</li> : null

                                                        )
                                                    })
                                                }
                                            </ul>
                                        </>

                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>

            </div> */}
        </>
    )
}

export default SkillNew