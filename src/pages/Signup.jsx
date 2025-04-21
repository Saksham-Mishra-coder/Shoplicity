import React, { useState } from "react";
import styled from "styled-components";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Layout from "../commponets/Layout";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);

  return (
    <Layout>
      <Wrapper>
        <FormBox>
          <Heading>Welcome to Shoplicity</Heading>
          <Paragraph>
            Discover fashion that fits your lifestyle. Shoplicity offers
            quality, trendy wear at unbeatable prices. Your next favorite outfit
            is just a click away.
          </Paragraph>

          <Form>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email Address" required />

            <PasswordWrapper>
              <Input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                required
              />
              <ToggleIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </ToggleIcon>
            </PasswordWrapper>

            <PasswordWrapper>
              <Input
                type={showConfirm ? "password" : "text"}
                placeholder="Confirm Password"
                required
              />
              <ToggleIcon onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </ToggleIcon>
            </PasswordWrapper>

            <Button type="submit">Sign Up</Button>
          </Form>
        </FormBox>
      </Wrapper>
    </Layout>
  );
};

export default Signup;

// Styled-components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdfdfd;
  padding: 2rem;
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: #cc6c5c;
  margin-bottom: 0.8rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  text-align: justify;
  color: #000;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 0.95rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #cc6c5c;
    box-shadow: 0 0 0 2px rgba(204, 108, 92, 0.15);
  }
`;

const Button = styled.button`
  padding: 0.9rem 1rem;
  background-color: #cc6c5c;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ToggleIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
  font-size: 1.1rem;

  &:hover {
    color: #cc6c5c;
  }
`;
