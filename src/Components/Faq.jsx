import "./Faq.scss"
import { faqData, categories } from "../FaqData"
import { useState } from "react"
import { Accordian } from "./Accordian"
import { useTranslation } from "react-i18next"

export const Faq = () => {
  const [category, setCategory] = useState("All")
  const [expand, setExpand] = useState("")
  const [search,setSearch]=useState("")
  const { t } = useTranslation()
  const filteredQuestions=faqData.filter(item =>t(`faqs.q${item.id}`).toLowerCase().includes(search.trim().toLowerCase()) && (category === "All" || item.category === category))

  return (
    <div className="faq container-box">
      <p className="small-heading">{t("commonQuestions")}</p>
      <h1 className="underlined-heading">{t("faqTitle")}</h1>
      <p className="description">{t("faqDesc")}</p>
      <input value={search} type="text" placeholder="Search for questions" onChange={(e)=>setSearch(e.target.value)} />
      
      <div className="buttons">
        {categories.map((item, index) =>
          <button
            className={item === category ? "sThemeBtn" : null}
            key={index}
            onClick={() => setCategory(item)}
          >
            {t(`faqCategories.${item.toLowerCase()}`)}
          </button>
        )}
      </div>

      <div className="faqs">
        {filteredQuestions.length>0?filteredQuestions.map((item, index) => (
            <Accordian
              item={item}
              key={index}
              expand={expand}
              setExpand={setExpand}
              question={t(`faqs.q${item.id}`)}
              answer={t(`faqs.a${item.id}`)}
            />
        )): <small>No matching questions</small>}
      </div>
    </div>
  )
}
