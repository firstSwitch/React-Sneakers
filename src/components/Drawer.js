function Drawer({onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
          <div className="drawer">
            <div className="cartClose">
              <h2 className="cartBlock">Cart </h2>
              <img onClick={onClose} width={40} height={40} src="/img/btn-remove.svg" alt="Close"/>
            </div>

            {
              items.length > 0 ? <div className="cartBlockItems">
              {
                items.map((obj) => (
                  <>
                  <div className="cartItem">
                <img className="cartImg" width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
                <div className="cartInfo">
                  <p>{obj.title}</p>
                  <b>{obj.price}$</b>
                  </div>
                <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove"/>
              </div>
                {/* <div className="cartItem">
                  <img className="cartImg" width={70} height={70} src="/img/Sneakers/1.jpg" alt="Sneakers" />
                  <div className="cartInfo">
                    <p>Men's Nike Air Max 270 Sneakers</p>
                    <b>1299$</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div> */}
                </>
                ))
              }
               <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Total:</span>
                    <div></div>
                    <b>4299$</b>
                  </li>
                  <li>
                    <span>The tax is 5%:</span>
                    <div></div>
                    <b>214,95</b>
                  </li>
                </ul>
                <button className="greenButton">Checkout <img src="/img/arrow.svg" alt="Arrow"/></button>
              </div>
            </div> : 
            <div className="cartEmpty">
              <img className="emptyImg" width={120} height={120} src="/img/empty-cart.svg" alt="Empty"/>
              <h2>Shopping cart is empty</h2>
              <p className="textEmptyCart">Add at least a pair of sneakers to place an order</p>
              <button onClick={onClose} className="greenButton">
                <img src="/img/arrow.svg" alt="Arrow"/>Back to shopping
              </button>
            </div>
            }
            
            

            

             
              
        </div>
      </div>
    )
}

export default Drawer;