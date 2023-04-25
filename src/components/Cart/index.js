import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/cart" />
  }

  return (
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        className="cart-image"
        alt="cart"
      />
    </div>
  )
}

export default Cart
