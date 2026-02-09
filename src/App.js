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

const onAddToCart = async (obj) => {
  try {
    const { data } = await axios.post(
      'https://66034fa52393662c31cedb1d.mockapi.io/api/React-Sneakers/cart',
      obj
    );
    setCartItems((prev) => [...prev, data]); // data содержит id
  } catch (e) {
    console.error(e);
    alert("Failed to add item to cart");
  }
};

const onAddToFavorite = (obj) => {
  axios.post('https://660a02310f324a9a288408ec.mockapi.io/favorites/favorites', obj)
  setFavorites((prev) => [...prev, obj]);
}

const onRemoveItem = async (id) => {
  try {
    await axios.delete(
      `https://66034fa52393662c31cedb1d.mockapi.io/api/React-Sneakers/cart/${id}`
    );
    setCartItems((prev) => prev.filter(item => item.id !== id));
  } catch (e) {
    console.error(e);
    alert("Failed to remove item");
  }
};

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
}

const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
const taxPrice = Math.round(totalPrice * 0.05 * 100) / 100;
const normalizedSearch = searchValue.toLowerCase().trim();

  return (
     <div className="wrapper">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => setCartOpened(false)}
          totalPrice={totalPrice}
          taxPrice={taxPrice}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} totalPrice={totalPrice} />

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
          {items
            .filter((item) => item.title.toLowerCase().includes(normalizedSearch))
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => onAddToFavorite(item)}
                onPlus={() => onAddToCart(item)}
              />
            ))}
        </div>

      </div>
    </div>
  );
}

export default App;
