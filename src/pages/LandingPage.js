import React from "react";
import { Link } from "react-router-dom";
import saleImg from "../saleImg.png";

const LandingPage = () => {
  return (
    <div>
      <br />
      <Link to="/products">
        <div className="salePage">
          <img src={saleImg} alt="sale" className="saleImg" />
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
