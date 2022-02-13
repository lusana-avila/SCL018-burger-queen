import React from 'react'
//import data from '../../data/Menu.json'

const Menu = ({data, addCart}) => {
  const mass = data.mass;
  const cheese = data.cheese;
  const meat = data.meat;
  const vegetables = data.vegetables;
  const extra = data.extra;
  const drinks = data.drinks;

  return (
    <>
    <div className='menu'>
      <article>
        <h2>Masas</h2>
        <div> 
          {mass.map((e,index) => {
            return(
            <button key={index} onClick={()=>addCart(e.id, e.item, e.price)}>
              {e.item} ${e.price}
            </button>
            )
          })}
        </div>
      </article>

      <article>
        <h2>Quesos</h2>
        <div>
          {cheese.map((e,index) => {
            return(
            <button key={index} onClick={()=>addCart(e.id, e.item, e.price)}>
              {e.item} ${e.price}
            </button>
            )
          })}
        </div>
      </article>

      <article>
        <h2>Carnes</h2>
        <div>
          {meat.map((e,index) => {
            return(
            <button key={index} onClick={()=>addCart(e.id, e.item, e.price)}>
              {e.item} ${e.price}
            </button>
            )
          })}
        </div>
      </article>

      <article>
        <h2>Vegetales</h2>
        <div>
          {vegetables.map((e,index) => {
            return(
            <button key={index} onClick={()=>addCart(e.id, e.item, e.price)}>
                {e.item} ${e.price}
            </button>
            )
          })}
        </div>
      </article>

      <article>
        <h2>Extras</h2>
        <div>
          {extra.map((e,index) => {
            return(
            <button key={index} onClick={()=>addCart(e.id, e.item, e.price)}>
                {e.item} ${e.price}
            </button>
            )
          })}
        </div>
      </article>

      <article>
        <h2>Bebestibles</h2>
        <div>
          {drinks.map((e,index) => {
            return(
            <button key={index} onClick={()=>addCart(e.id, e.item, e.price)}>
              {e.item} ${e.price}
            </button>
            )
          })}
        </div>
      </article>
      </div>
      
    </>
  );
}

export default Menu;