import React, { useEffect, useState, useTransition } from 'react'
import "./skill.css"
import ExpCategoryNew from './ExpCategoryNew'
import MySkillNew from './MySkillNew'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getSkillList } from '../../services/actions/skillAction'

const SkillNew = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const result = useSelector((state) => state.skillData)

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
                            result.map((item, index) => {
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
                            result.map((categ, index) => {
                                return <div className='skills_group' key={index}>
                                    <div className='skills_list grid'>
                                        {
                                            <MySkillNew categ={categ} tag={tag}/>
                                        }

                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillNew