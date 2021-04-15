import { useParams } from "react-router-dom";
import products from "../fakeData/products2.json";

const Detail = () => {
  const params = useParams();
  const { id } = params;

  const product = products.find((product) => product.id == id);

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt="" />
      <h1>{product.price}</h1>
    </div>
  );
};

export default Detail;
