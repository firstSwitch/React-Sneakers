
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer"></div>
      </div>



      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Store for the best sneakers</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
             <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
              <span>1205$</span>
            </li>
            <li>
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="sneaker-block">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Search..."/>
          </div>
        </div>

        <div className="sneakers">
        <div className="card">
          <div className="favorite">
          <img src="/img/heart-unliked.svg" alt="Unliked"/>
          </div>
          <img width={133} height={112} src="/img/Sneakers/1.jpg" alt="Sneakers"/>
          <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
          <div className="cardBottom">
            <div className="cardInfo">
              <span>Price:</span>
              <b>1299$</b>
            </div>
            <button className="cardBtn">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        
        <div className="card">
          <img width={133} height={112} src="/img/Sneakers/2.jpg" alt="Sneakers"/>
          <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
          <div className="cardBottom">
            <div className="cardInfo">
              <span>Price:</span>
              <b>1299$</b>
            </div>
            <button className="cardBtn">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/Sneakers/3.jpg" alt="Sneakers"/>
          <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
          <div className="cardBottom">
            <div className="cardInfo">
              <span>Price:</span>
              <b>1299$</b>
            </div>
            <button className="cardBtn">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/Sneakers/4.jpg" alt="Sneakers"/>
          <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
          <div className="cardBottom">
            <div className="cardInfo">
              <span>Price:</span>
              <b>1299$</b>
            </div>
            <button className="cardBtn">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
