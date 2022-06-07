import React, { useState } from "react";
import "../../css/Products/Products.css";

import ProductModalInfo from "./ProductModalInfo";

export default function Products(props) {
  const [product, setProduct] = useState("");

  const handleOpenModal = (product) => {
    setProduct(product);
  };

  const handleCloseModal = () => {
    setProduct(false);
  };

  return (
    <section className="page-products">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <aside className="aside-filter">
                <div className="title-filter">
                  <h3 className="border-style-heading">Filter Products</h3>
                </div>
                <article>
                  <h4>Categories</h4>
                  <div>
                    <ul>
                      <li>
                        <label className="container-checkbox">
                          Category Name
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container-checkbox">
                          Category Name
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container-checkbox">
                          Category Name
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container-checkbox">
                          Category Name
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container-checkbox">
                          Category Name
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </article>
              </aside>
            </div>
          </div>
          <div className="col-md-9">
            <div className="products">
              <div className="row">
                {props.products.map((product) => (
                  <div className="col-md-4" key={product.id}>
                    <div className="item-product">
                      <div className="img-product">
                        <a
                          className="img-prod"
                          onClick={() => handleOpenModal(product)}
                        >
                          <img
                            src={product.img}
                            className="img-fluid"
                            alt={product.title}
                          />
                        </a>
                        <div className="actions">
                          <a className="btnadd-cart">
                            <i className="fas fa-cart-plus fa-lg"></i> Cart
                          </a>
                          <a className="btnadd-wishlist">
                            <i className="fas fa-heart fa-lg"></i> Favorite
                          </a>
                        </div>
                      </div>
                      <div className="info-product p-3">
                        <a className="title-product">
                          {product.title}
                        </a>
                        <div className="prices">
                          <span> LE {product.price} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ProductModalInfo
          product={product}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </section>
  );
}
