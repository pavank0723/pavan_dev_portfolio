import { useTranslation } from "react-i18next"

const AboutBox = () => {
    const { t } = useTranslation()
    return (
        <div className='about_boxes grid'>
            <div className='about_box'>

                <i className="about_icon uil uil-award-alt"></i>
                <div>
                    <h3 className='about_title'>{t('freelancing')}</h3>
                    <span className='about_subtitle'>{t('year')}</span>
                </div>

            </div>
            <div className='about_box'>
                <i className='about_icon uil uil-briefcase-alt'></i>
                <div>
                    <h3 className='about_title'>{t('completed')}</h3>
                    <span className='about_subtitle'>{t('project_exp')}</span>
                </div>

            </div>
            
            <div className='about_box'>
                <i className='about_icon uil uil-headphones'></i>
                <div>
                    <h3 className='about_title'>{t('support')}</h3>
                    <span className='about_subtitle'>{t('online')}</span>
                </div>

            </div>

        </div>
    )
}

export default AboutBox