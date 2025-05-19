import { useState } from 'react'
import { gallery } from '../data'
import { ImageCard } from './ImageCard'
import { Modal } from './Modal'
import { useTranslation } from 'react-i18next'

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { t } = useTranslation()

  return (
    <div className='gallery container-box'>
      <p className='small-heading'>{t('galleryIntro')}</p>
      <h1 className='underlined-heading'>{t('galleryHeading')}</h1>
      <p className='description'>{t('galleryDescription')}</p>
      <div className="cards">
        {gallery.map((item,index)=>
          <ImageCard item={item} key={index} onClick={() => setSelectedImage(item.image)}/>
        )}
      </div>
      {
        selectedImage && <Modal image={selectedImage} setSelectedImage={setSelectedImage}/>
      }
    </div>
  )
}
