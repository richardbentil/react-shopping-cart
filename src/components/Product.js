import React from 'react'

export const Product = ({ product, addToCart, addToWishList }) => {
  return (
    <div className="col-6 col-lg-4 col-md-6 mb-3" >
      <div className="card">
        <img
          className="card-img-top img-responsive"
          src={`/img/products/${product.img}`}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">GHS {product.price}</p>
          <div>
            <button
              className="btn btn-secondary me-1"
              onClick={() => addToWishList(product)}>
              <i className="fa fa-heart"></i>
            </button>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}>
              <i className="fa fa-shopping-bag"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
