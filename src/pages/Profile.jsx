import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card shadow">
        <h1 className="text-3xl text-center text-[#cc6c5c]  py-5">
          Shoplicity
        </h1>
        <div className="text-center text-xl">
          <p>Hello User </p>
        </div>
        <div className="text-center text-sm py-2 text-gray-500">
          <p>To access your Shoplicity acount </p>
        </div>
        <div className="button flex  justify-evenly">
          <button className="bg-gray-300  px-4 py-1 hover:scale-75 transtion duration-500">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-[#cc6c5c] text-white  px-4 py-1 hover:scale-75 transtion duration-500">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 200px;
    background: white;

    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .shadow {
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
`;

export default Card;
