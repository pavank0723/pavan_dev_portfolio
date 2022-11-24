import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation()
  const MY_SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const MY_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const MY_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

  const myForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(MY_SERVICE_ID, MY_TEMPLATE_ID, myForm.current, MY_PUBLIC_KEY)
      e.target.reset()
  }
  return (
    <>
      <section className='contact container section' id='contact'>
        <h2 className='section_title'>{t('contact_me')}</h2>
        <span className='section__subtitle'> {t('get_in_touch')}</span>

        <div className='contact_container container grid'>
          <div className='contact_content'>
            <h3 className='contact_title'> {t('talk_to_me')}</h3>
            <div className='contact_info'>
              <div className='contact_card'>
                <i className='uil uil-at services_icon'></i>
                <h3 className='contact_card_title'>{t('email')}</h3>
                <span className='contact_card_data'>pavan.yadav0723@gmail.com</span>

                <a href='mailto:pavan.yadav@gmail.com.com' target='_blank' className='contact_button'> {t('write_me')} <i className='uil uil-arrow-right contact_button_icon'></i></a>
              </div>
              <div className='contact_card'>
                <i className='uil uil-whatsapp services_icon'></i>
                <h3 className='contact_card_title'>{t('whatsapp')}</h3>
                <span className='contact_card_data'>+91 8433819799</span>

                <a href="https://wa.me/918433819799" target='_blank' className='contact_button'> {t('write_me')} <i className='uil uil-arrow-right contact_button_icon'></i></a>
              </div>
              <div className='contact_card'>
                <i className='uil uil-linkedin-alt services_icon'></i>
                <h3 className='contact_card_title'>{t('linkedin')}</h3>
                <span className='contact_card_data'>pavan-yadav-227300215</span>

                <a href="https://www.linkedin.com/in/pavan-yadav-227300215/" target='_blank' className='contact_button'> {t('write_me')} <i className='uil uil-arrow-right contact_button_icon'></i></a>
              </div>

            </div>
          </div>
          <div className='contact_content'>
            <h3 className='contact_title'> {t('write_me_title')}</h3>
            <form ref={myForm} onSubmit={sendEmail} className='contact_form'>
              <div className='contact_form_div'>
                <label className='contact_form_tag'>{t('name')}</label>
                <input type='text' name='name' placeholder={t('enter_your_name')} className='contact_form_input' />
              </div>

              <div className='contact_form_div'>
                <label className='contact_form_tag'>{t('mail')}</label>
                <input type='email' name='email' placeholder={t('enter_your_mail')} className='contact_form_input' />
              </div>

              <div className='contact_form_div contact_form_area'>
                <label className='contact_form_tag'>{t('project')}</label>
                <textarea name='project' id='' cols='30' rows='10' placeholder={t('write_your_project')} className='contact_form_input' />
              </div>

              <button className='btn btn-flex'>
                {t('send_message')} <i className="uil uil-message btn_icon"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact