import React from 'react'
import './Modal.css'

function Modal({ data, openModal, setOpenModal, addToCart }) {
    return (
      <div className="modal-background">
        {openModal ?  
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false)
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="title">
            <h1>{data.name}</h1>
          </div>
          <div className="modal-pic">
            <img src={data.img_link} alt={data.name}></img>
            </div>
            <div className="title">
              <h1>${data.price}</h1>
              </div>
              <div className="subtitle">
              <h1>{data.category}</h1>
              </div>
          <div className="body">
            <p>{data.description}</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false)
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => addToCart(data.id)}>Add To Cart</button>
          </div>
        </div>
        : null}
      </div>
    );
  }

export default Modal