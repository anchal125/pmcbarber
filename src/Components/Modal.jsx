import "./Modal.scss"

export const Modal = ({ image,setSelectedImage }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span onClick={()=>setSelectedImage(null)}>X</span>
        <img src={image} alt="shop image" />
      </div>
    </div>
  )
}

