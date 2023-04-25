import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/products" />
  }

  return (
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        className="product-image"
        alt="products"
      />
    </div>
  )
}

export default Products
