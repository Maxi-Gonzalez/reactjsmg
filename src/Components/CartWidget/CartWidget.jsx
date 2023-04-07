import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {CartContext} from "../../Context/CartContext";

const CartWidget = () => {

  const {cart} =useContext(CartContext)
  // const total = getTotalQuantity()
  return (

    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "black",
          }}
        />
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;