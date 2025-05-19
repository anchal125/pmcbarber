import "./Card.scss"

export const Card = ({item}) => {
  return (
    <div className="Card division service-card">
      <span style={{ fontSize: "2rem" }}>{item.icon}</span>
      <h3>{item.title}</h3>
      {item.description}
      <ul>
        {item.items.map((item,index)=>
          <li style={{listStylePosition: "inside"}} key={index}>{item}</li>
        )}
      </ul>


    </div>
  )
}
