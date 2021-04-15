import { useContext } from "react";

import { CartContext } from "../contexts/cartContext";
import Card from "../components/ProductCard";
import products from "../fakeData/products2.json";

const Products = () => {
  const [state, dispatch] = useContext(CartContext);

  const addProductToCart = (product) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        product,
      },
    });
  };

  return (
    <div className="mt-3 card">
      <div className="bg-white card-header">
        <h3 className="text-center">Welcome To DumbWays Store</h3>
      </div>
      <div className="card-body">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-sm-3" key={product.id + index}>
              <Card product={product} addProductToCart={addProductToCart} />
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer">{JSON.stringify(state, null, 2)}</div>
    </div>
  );
};

export default Products;
