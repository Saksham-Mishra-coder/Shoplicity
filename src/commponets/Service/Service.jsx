import React from "react";
import { FiTruck, FiShield, FiRefreshCcw, FiLock } from "react-icons/fi";
import styled from "styled-components";

const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 1rem;
`;

const ServiceCard = styled.div`
  background-color: #cc6c5c;
  color: white;
  padding: 1.5rem 1rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
   transition: transform 0.3s ease-in-out; 

  &:hover {
    transform: scale(1.10);
`;

const Service = () => {
  return (
    <ServiceWrapper>
      <ServiceCard>
        <FiTruck size={30} />
        <p>Free Shipping</p>
      </ServiceCard>
      <ServiceCard>
        <FiShield size={30} />
        <p>Authentication Product</p>
      </ServiceCard>
      <ServiceCard>
        <FiRefreshCcw size={30} />
        <p>Easy Return</p>
      </ServiceCard>
      <ServiceCard>
        <FiLock size={30} />
        <p>Secure Payment</p>
      </ServiceCard>
    </ServiceWrapper>
  );
};

export default Service;
