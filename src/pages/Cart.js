import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

import { convertToRupiah } from "../utils";

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  const removeProductFromCart = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      payload: {
        product: {
          id,
        },
      },
    });
  };

  return (
    <div className="mt-3 row">
      <div className="col-sm-9">
        <div className="card">
          <div className="text-left bg-white card-header">
            <h3>Your Orders</h3>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {state.carts.map((cart) => (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="list-group-item"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        height: "160px",
                        aspectRatio: "16/10",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                      src={cart.img}
                      alt=""
                    />
                    <div>
                      <h3>{cart.name}</h3>
                      <h4>{convertToRupiah(cart.price)}</h4>
                      <h5 className="text-secondary">Qty: {cart.qty}</h5>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeProductFromCart(cart.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-3">Checkout</div>
    </div>
  );
};

export default Cart;
