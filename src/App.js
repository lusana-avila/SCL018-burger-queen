import React, {useState} from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  } from "react-router-dom";
import menu from './data/Menu.json';
import Home from './components/Home/Home';
import Kitchen from './components/Kitchen/Kitchen';
import Waiter from './components/Waiter/Waiter';
import Error404 from './components/Error404';

function App() {

  const data = menu;
  console.log(data);

  const [shoppingCart, changeCart] = useState([]);
  
  const addCart = (id, item, price) => {
    
      if(shoppingCart.length === 0) {
        changeCart([{
          id:id,
          item:item,
          price:price,
          count:1
          }])
      } else {
        const newCart = [...shoppingCart];

        const insideCart = newCart.filter( (cartItem) => {
          return cartItem.id === id
        }).length > 0;

        if (insideCart){
          newCart.forEach((cartItem, index) => {
            if (cartItem.id === id){
              const count = newCart[index].count;
              newCart[index] = {
                id: id,
                item: item,
                price: price,
                count: count + 1 
              }
            }
          });
        } else {
          newCart.push(
            {
            id: id,
            item: item,
            price: price,
            count: 1 
          });
        }
        
        changeCart(newCart);
      }

      console.log(shoppingCart)

  }
  
    return (
      <Router>
        <Switch>
          <Route path='/' exact> <Home/> </Route>
          <Route path='/kitchen'> <Kitchen/> </Route>
          <Route path='/waiter' > <Waiter
            data={data} 
            addCart={addCart} 
            shoppingCart={shoppingCart}/>
            </Route>

          <Route> <Error404/> </Route>
        </Switch>
      </Router>
  );
}

export default App;
