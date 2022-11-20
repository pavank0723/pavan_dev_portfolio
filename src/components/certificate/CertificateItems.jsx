import React from 'react'

const CertificateItems = ({ filteredImage }) => {
    return (
        <>

            {filteredImage.map((elem) => {
                const { id, image, title, demo } = elem
                return (
                    <div className='certificate_card' key={id}>

                        <img src={image} className='certificate_img' alt='' />

                        <h3 className='certificate_title'>{title}</h3>
                        <a href={demo} target='_blank' className='certificate_button'>
                            Demo <i className='uil uil-arrow-right certificate_button_icon'></i>
                        </a>
                    </div>

                )
            })}
        </>

    )
}

export default CertificateItems