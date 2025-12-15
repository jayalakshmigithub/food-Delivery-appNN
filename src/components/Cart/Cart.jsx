
import { useContext } from "react";
import CartContext from "@/context/cartContext.js";
import { MdDelete } from "react-icons/md";
import emptyBag from "../../assets/empty-bag.svg"

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

 

  if (!cartItems || cartItems.length === 0) {
    return (
    <div className="flex flex-col items-center justify-center  text-center text-gray-400 py-10 font-semibold">
       <img src={emptyBag} className="items-center flex"/>
        
       <p>Your cart is empty <br/>Looks like you haven't made your choice yet.</p>
     </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4 px-1">
        <h3 className="text-lg font-semibold border-b pb-2">
        Cart
      </h3>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div>
            <p>{item.name}</p>
            <p className="text-sm text-gray-500">
               {"\u20B9"}{item.price} × {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p> {"\u20B9"}{item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>
              <MdDelete className="text-red-500" />
            </button>
          </div>
        </div>
      ))}

      <div className="border-t pt-3 flex justify-between font-semibold">
        <span>Total</span>
         <span>   {"\u20B9"}{total}</span>
      </div>
    </div>
  );
};

export default Cart;

