import { useTranslation } from "react-i18next"

const ScrollDown = () => {
  const { t } = useTranslation()
  return (
    <div className='scroll_down'>
        <a href='#about' className='mouse_wrapper'>
            <span className='home_scroll_name'>
                    {t('scroll_down')}
            </span>
            <span className='mouse'>
                <span className='wheel'></span>
            </span>
        </a>

    </div>
  )
}

export default ScrollDown