// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let cartPrice = 0
      cartList.forEach(cartItem => {
        cartPrice += cartItem.price * cartItem.quantity
      })

      return (
        <div className="cart-total-price-container">
          <div className="cart-summary">
            <h1 className="cart-price-heading">
              Order Total:
              <span className="cart-summary-total"> Rs {cartPrice}/- </span>
            </h1>
            <p className="cart-total-items-count">
              {cartList.length} Items in cart
            </p>
            <button type="button" className="check-out-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
