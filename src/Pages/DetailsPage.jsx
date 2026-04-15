import "../Style/DetailsPage.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Header from "../Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();

  const fetchSingleProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`,
      );
      setSingleProduct(res.data);
      localStorage.setItem("products", JSON.stringify(res.data));
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <>
      <Header />
      <main className="DetailsPageContainer">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <section className="Detailsleft">
              <div className="Dtop">
                <h3>Register by {singleProduct?.category?.name}</h3>
                <p>
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} /> 4.5(89
                  reviews)
                </p>
                <h2>
                  <AiOutlineMinus style={{ color: "yellow" }} />
                  <AiOutlineMinus style={{ color: "green" }} />
                  <AiOutlineMinus style={{ color: "black" }} />
                  <AiOutlineMinus />
                </h2>
              </div>
              <div className="Dbottom">
                <button className="icons">
                  <FaArrowLeft />
                </button>
                <img src={singleProduct?.images?.[0]} alt="" />
                <button className="icons">
                  <FaArrowRight />
                </button>
              </div>
            </section>
            <section className="Detailsright">
              <div className="first">
                <h2>{singleProduct.title}</h2>
                <span>item code: {singleProduct.id}</span>
                <h6>DESCRIPTION</h6>
                <p>{singleProduct.description}</p>
              </div>
              <div className="second">
                <p>Price</p>
                <h2>${singleProduct?.price}</h2>
                <p>color</p>
                <select name="colors" id="colors">
                  <option value="green">GREEN</option>
                  <option value="red">RED</option>
                  <option value="blue">BLUE</option>
                </select>
                <p>color</p>
                <div className="add-to-cart">
                  <select name="number" id="number">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                  </select>
                  <button className="add">ADD TO CART</button>
                </div>
              </div>
              <div className="third">
                <small>DETAILS</small>
                <small>DELIVERY</small>
                <small>RETURN</small>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default DetailsPage;
