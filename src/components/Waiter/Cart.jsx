import React from 'react';

const Cart = ({data, addCart, shoppingCart}) => {
  const total = shoppingCart.reduce ((total, item) => (
    total = total + item.price*item.count
    ),0)

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Productos:</h3>
      <article>
        {shoppingCart.length > 0 ?
        shoppingCart.map((e, index) => {
          return (
            <div className="item" key={index}>
              {e.item} $ {e.price} cant: {e.count}
            </div>
          )
        })
        
        :
        <p> Añadir items </p>
      }
        <div>
          <h2>Total: $ {total}</h2>
        </div>
      </article>
    </>
  );
}
  
  export default Cart;