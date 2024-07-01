import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { Routes, Route } from 'react-router-dom'



function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

React.useEffect(() => {
  axios.get('https://66034fa52393662c31cedb1d.mockapi.io/api/React-Sneakers/items').then((res) => {
    setItems(res.data)
  })
  axios.get('https://66034fa52393662c31cedb1d.mockapi.io/api/React-Sneakers/cart').then((res) => {
    setCartItems(res.data)
  })
},[]);

const onAddToCart = (obj) => {
  axios.post('https://66034fa52393662c31cedb1d.mockapi.io/api/React-Sneakers/cart', obj)
  setCartItems((prev) => [...prev, obj]);
}

const onAddToFavorite = (obj) => {
  axios.post('https://660a02310f324a9a288408ec.mockapi.io/favorites/favorites', obj)
  setFavorites((prev) => [...prev, obj]);
}

const onRemoveItem = (id) => {
  axios.delete(`https://66034fa52393662c31cedb1d.mockapi.io/api/React-Sneakers/cart/${id}`)
  setCartItems((prev) => prev.filter(item => item.id !== id));
}

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
}

  return (
     <div className="wrapper">
      {cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
      <Route path="/favorites">123321123321</Route>
      </Routes>
      
      <div className="content">
        <div className="sneaker-block">
          <h1>{ searchValue ? `Поиск по запросу : "${searchValue}"`: `All sneakers`}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            {searchValue && <img className="clear" onClick={() => setSearchValue('')} src="/img/btn-remove.svg" alt="Clear"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
          </div>
        </div>

        <div className="sneakers">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
            <Card key={index} title={item.title} price={item.price} imageUrl={item.imageUrl} onFavorite={(obj) => onAddToFavorite(obj)} onPlus={(obj) => onAddToCart(obj)}/>          
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
