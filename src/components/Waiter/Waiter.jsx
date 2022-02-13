import React from 'react';
import Menu from './Menu';
import Cart from './Cart';

const Waiter = ({data, addCart, shoppingCart}) => {
  return (
    <>
    <section>
    <main>
      <Menu data={data} addCart={addCart} shoppingCart={shoppingCart}/>
    </main>
    <aside>
      <Cart data={data} addCart={addCart} shoppingCart={shoppingCart}/>
    </aside>
    </section>
    </>
  );
}

export default Waiter;