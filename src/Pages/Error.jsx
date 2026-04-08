import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "red",
        color: "white",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>404 page not found</h1>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default Error;
