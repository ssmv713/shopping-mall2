import { Product } from "../../types";

export const ProductDetail = ({
  item: {
    category,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => (
  <div className="products-detail">
    <p className="products-detail__categoty">{category}</p>
    <p className="products-detail__description">{description}</p>
    <img className="products-detail__image" src={image} alt="" />
    <span className="products-detail__price">${price}</span>
    <span className="products-detail__rating">{rate}</span>
  </div>
);
