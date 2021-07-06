import React from 'react'
import { Aside, Product } from '../components';

export const Home = ({ addToCart, addToWishList }) => {
  const products = [
    {
      id: 1,
      name: "khaki Trousers",
      price: 45.0,
      img: "trousers.jpg",
      qtyInCart: 0,
    },
    {
      id: 2,
      name: "Lactogen",
      price: 25.0,
      img: "lactogen.jpg",
      qtyInCart: 0,
    },
    {
      id: 3,
      name: "Cerelac",
      price: 20.0,
      img: "cerelac.jpg",
      qtyInCart: 0,
    },
  ];

  return (
    <div className="container">
      <div className="row m-auto my-5">
        <div className="col-md-3 d-none d-md-block">
          <Aside />
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                addToWishList={addToWishList}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

