import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
   const { cartCantidad } = useContext(CartContext)

   return (
      <Link to='/cart'>
         <FontAwesomeIcon icon={faCartShopping} />
         {cartCantidad()}
      </Link>
   );
};


export default CartWidget

