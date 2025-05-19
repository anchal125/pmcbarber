import "./ImageCard.scss"

export const ImageCard = ({item,onClick}) => {
  return (
    <div onClick={onClick} className="imageCard">
      <img style={{width:"100%",objectFit:"cover",height:"100%"}} src={item.image} alt="our shop" />
    </div>
  )
}

