import "./Card.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const nav = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      // console.log("server response", res);
    } catch (error) {
      console.log("here am i Dr error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="CardContainer">
      <section className="CardsHolder">
        {isLoading ? (
          <div className="Loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          products?.map((item) => (
            <div className="cards" key={item?.id}>
              <img src={item?.images?.[1]} alt={item?.title} />
              <h2>{item?.title}</h2>
              <h3>${item?.price}</h3>
              <p>{item?.description}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Card;
