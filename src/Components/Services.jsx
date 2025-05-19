import React from 'react'
import { services } from '../data'
import { Card } from './Card'
import { useTranslation } from 'react-i18next'

export const Services = () => {
  const { t } = useTranslation()

  return (
    <div className='services container-box'>
      <p className='small-heading'>{t("servicesIntro")}</p>
      <h1 className='underlined-heading'>{t("servicesHeading")}</h1>
      <p className='description'>{t("servicesDescription")}</p>
      <div className="cards">
        {services.map((item, index) =>
          <Card key={index} item={item} />
        )}
      </div>
    </div>
  )
}
