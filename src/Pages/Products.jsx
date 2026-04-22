import "../Style/Products.css";
import axios from "axios";
import Button from "../Components/Button";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Products = () => {
  const nav = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { dispatch } = useContext(CartContext);
  // console.log(useContext(CartContext));

  // const fetchProduct = async () => {
  //   try {
  //     const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //     const newdata = await response.json();
  //     // setProduct(newdata);
  //     console.log(newdata);
  //   } catch (error) {
  //     console.log("error fetching data", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(res?.data);
      setIsLoading(false);
      console.log("server response", res);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="ProductContainer">
      <section className="ProductHolder">
        {isLoading ? (
          <div className="Loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          products?.map((item) => (
            <div
              className="cards"
              key={item?.id}
              // onClick={() => nav(`detailspage/${item.id}`)}
            >
              <img src={item?.images?.[0]} alt={item?.title} />
              <h2>{item?.title}</h2>
              <h3>${item?.price}</h3>
              <p>{item?.description}</p>
              <Button
                text="Add to cart"
                className="add-btn"
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              />
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Products;
