import React, { useState } from 'react'
import "./services.css"
import Data from './Data'

const Services = () => {
  const [model, setModel] = useState(0)

  const toggleTab = (index) => {
    setModel(index)
  }
  return <section className='service container section' id='service'>
    <h2 className='section_title'>Services</h2>
    <span className='section__subtitle'> What I Offer</span>
    <div className='services_container container grid'>
      <div className='services_content'>
        <div>
          <i className='uil uil-web-grid services_icon'></i>
          <h3 className='services_title'>Product <br /> Designer</h3>
        </div>
        <span className='services_button' onClick={() => toggleTab(1)}>View More
          <i className='uil uil-arrow-right services_button_icon'></i>
        </span>
        <div className={model === 1 ? 'services_model active_model' : 'services_model'}>
          <div className='services_model_content'>
            <i className='uil uil-times services_model_close' onClick={() => toggleTab(0)}></i>
            <h3 className='services_model_title'>Visual Designer</h3>
            <p className='services_model_description'> Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

            <ul className='services_model_services grid'>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I develop the user interface.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  Web page development.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I create ux element interactions.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I position your company brand.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className='services_content'>
        <div>
          <i className='uil uil-web-grid services_icon'></i>
          <h3 className='services_title'>UI/UX <br /> Designer</h3>
        </div>
        <span className='services_button' onClick={() => toggleTab(2)}>View More
          <i className='uil uil-arrow-right services_button_icon'></i>
        </span>
        <div className={model === 2 ? 'services_model active_model' : 'services_model'}>
          <div className='services_model_content'>
            <i className='uil uil-times services_model_close' onClick={() => toggleTab(0)}></i>
            <h3 className='services_model_title'>Visual Designer</h3>
            <p className='services_model_description'> Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

            <ul className='services_model_services grid'>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I develop the user interface.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  Web page development.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I create ux element interactions.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I position your company brand.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className='services_content'>
        <div>
          <i className='uil uil-web-grid services_icon'></i>
          <h3 className='services_title'>Logo <br /> Designer</h3>
        </div>
        <span className='services_button' onClick={() => toggleTab(3)}>View More
          <i className='uil uil-arrow-right services_button_icon'></i>
        </span>
        <div className={model === 3 ? 'services_model active_model' : 'services_model'}>
          <div className='services_model_content'>
            <i className='uil uil-times services_model_close' onClick={() => toggleTab(0)}></i>
            <h3 className='services_model_title'>Visual Designer</h3>
            <p className='services_model_description'> Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

            <ul className='services_model_services grid'>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I develop the user interface.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  Web page development.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I create ux element interactions.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  I position your company brand.
                </p>
              </li>
              <li className='services_model_service'>
                <i className='uil uil-check-circle services_model_icon'></i>
                <p className='services_model_info'>
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>

  </section>
}

export default Services