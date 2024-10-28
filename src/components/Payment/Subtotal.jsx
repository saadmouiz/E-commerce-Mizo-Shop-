// Subtotal.js

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Register/firebase"; 
import toast from "react-hot-toast";


function Subtotal() {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const amount = cartList.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const handlePaymentClick = () => {
    if (cartList.length <= 0) {
      toast.error("Your cart is empty");
    } else if (isLoggedIn) {
      toast.success("Proceeding to Payment");
      navigate("/payment", { state: amount });
    } else {
      toast.error("Please log in first");
      navigate("/login");
    }
  };

  // Fonction pour vérifier si l'utilisateur est connecté
  const checkUserLoggedIn = () => {
    const user = auth.currentUser;
    return user !== null;
  };

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal({cartList.length} items):
          <strong> Rs.{amount}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" /> This Order Contains a Gift
        </small>
      </>

      <button className="paybtn" onClick={handlePaymentClick}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
