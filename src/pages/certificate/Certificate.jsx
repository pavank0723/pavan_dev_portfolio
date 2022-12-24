import React, { useEffect, useState, useTransition } from 'react'
import "./certificate.css"
import CertificateData from './CertificateData'
import CertificateItems from './CertificateItems'
import CategoryButton from './CategoryButton'
import { useTranslation } from 'react-i18next'

const allCategory = ["All", ...new Set(CertificateData.map((curElem) => curElem.category))]
const Certificate = () => {
  const { t } = useTranslation()
  const [certificate, setCertificate] = useState(CertificateData)
  const [catItem, setCatItem] = useState(allCategory)

  const [tag, setTag] = useState('All')

  const [filteredImage, setFilteredImage] = useState([])

  useEffect(() => {
    tag === 'All' ? setFilteredImage(certificate) : setFilteredImage(certificate.filter(item => item.category === tag))
  }, [tag])

  const filterItem = (categoryItem) => {

    if (categoryItem === "All") {
      setCertificate(CertificateData)
      return
    }
    const updatedItems = CertificateData.filter((curElem) => {
      return curElem.category === categoryItem
    })

    setCertificate(updatedItems)
  }

  return (
    <section className='certificate container section' id='portfolio'>
      <h3 className='section_title'>{t('achievements')}</h3>
      <span className='section__subtitle'> {t('my_all_certificate')}</span>

      {/* ------==== Certificate Menu ====----- */}
      <div className='certificate_filters'>

        <CategoryButton
          filterItem={filterItem}
          catItem={catItem}
          handleSetTag={setTag}
          currentTag={tag}
        />
      </div>


      {/* ------==== Certificate List ====----- */}


      <div className='certificate_container container grid'>
        <CertificateItems filteredImage={filteredImage} />

      </div>

    </section>
  )
}


export default Certificate