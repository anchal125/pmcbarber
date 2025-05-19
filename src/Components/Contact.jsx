import "./Contact.scss"
import { contactDetails } from '../data'
import { Form } from "./Form"
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className='contact container-box'>
      <p className="small-heading">{t('bookAppointment')}</p>
      <h1 className="underlined-heading">{t('contact')}</h1>
      <p className="description">{t('contactDescription')}</p>
      <div className="sections">
        <div className="left division">
          {contactDetails.map((item,index)=>
            <div className="box" key={index}>
              <item.icon className="sColor"/>
              <div className="text">
                <h4>{item.title}</h4>
                <small>{item.info}</small>
              </div>
            </div>
          )}
        </div>
        <div className="right division">
            <Form/>
        </div>
      </div>
    </div> 
  )
}
