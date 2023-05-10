import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
  category,

  id,
  image,
  price,
  rating,
  title,
}: Product) => (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__categoty">{category}</p>

      <img className="products-item__image" src={image} alt="" />
      <span className="products-item__price">${price}</span>
      <span className="products-item__rating">{rating.rate}</span>
    </Link>
  </li>
);

export default ProductItem;
