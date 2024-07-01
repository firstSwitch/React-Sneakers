import { Link } from "react-router-dom";

function Header(props) {
    return(
        <header>
        <div className="headerLeft">
          <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Store for the best sneakers</p>
          </div>
          </Link>
        </div>
        <div>
          <ul className="headerRight">
            <li>
             <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
              <span onClick={props.onClickCart}>1205$</span>
            </li>
              <li className="favorite">
               <Link to="favorites">
               <img width={18} height={18} src="/img/heart.svg" alt="Heart"/>
               </Link>
              </li>
            <li>
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
            </li>
          </ul>
        </div>
      </header>
    )
}
export default Header;