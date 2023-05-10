import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "products",
    })
  );

  console.log(data);
  return <div>상품목록</div>;
};

export default ProductList;
