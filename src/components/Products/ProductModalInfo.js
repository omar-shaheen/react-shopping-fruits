import React from "react";
import ReactModal from "react-modal";

export default function ProductModalInfo(props) {
  const {product, handleCloseModal} = props;
  return (
    <ReactModal isOpen={product} onRequestClose={handleCloseModal}>
      <span onClick={handleCloseModal} className="close-icon">
        &times;
      </span>
      <div className="item-product">
        <div className="img-product">
          <img src={product.img} className="img-fluid" alt={product.title} />
          <div className="actions">
            <a href="#" className="btnadd-cart">
              <i className="fas fa-cart-plus fa-lg"></i> Cart
            </a>
            <a href="#" className="btnadd-wishlist">
              <i className="fas fa-heart fa-lg"></i> Favorite
            </a>
          </div>
        </div>
        <div className="info-product p-3">
          <a href="#" className="title-product">
            {product.title}
          </a>
          <div className="prices">
            <span> LE {product.price} </span>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
