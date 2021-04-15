import { useHistory } from "react-router-dom";
import { convertToRupiah } from "../utils";

const ProductCard = ({ product, addProductToCart }) => {
  const { id, name, price, img } = product;
  const router = useHistory();

  const goToDetailPage = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="mb-4 card card-product">
      <img
        src={img}
        alt={name}
        style={{
          objectFit: "cover",
          width: "100%",
          aspectRatio: "16/10",
        }}
        onClick={goToDetailPage}
      />
      <button
        style={{
          borderRadius: 0,
        }}
        className="btn btn-dark btn-block"
        onClick={() => addProductToCart(product)}
      >
        Add To Cart
      </button>
      <div className="card-body" onClick={goToDetailPage}>
        <div className="pt-3 text-center">
          <h4
            style={{
              minHeight: "50px",
            }}
          >
            {name}
          </h4>
          <h6>{convertToRupiah(price)}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
