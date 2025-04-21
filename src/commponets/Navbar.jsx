import { FiUser, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(252, 252, 252);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #cc6c5c;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: rgba(17, 17, 18, 1);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  background: #cc6c5c;
  list-style: none;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #ffebcd;
    }
  }
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:hover .hover-card,
  .hover-card:hover {
    display: block;
  }
`;

const HoverCard = styled.div`
  display: none;
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 50;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <Logo>Shoplicity</Logo>

        <NavLinks>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Products</StyledLink>
          </li>
          <li>
            <StyledLink to="/mens">Mens</StyledLink>
          </li>
          <li>
            <StyledLink to="/kids">Kids</StyledLink>
          </li>
        </NavLinks>

        <RightSection>
          <Link to="/cart">
            <FiShoppingCart size={22} color="#333" />
          </Link>

          <ProfileWrapper>
            <FiUser size={25} color="#333" />
            <span
              style={{ marginLeft: "5px", color: "#333", fontWeight: "500" }}
            >
              Profile
            </span>
            <HoverCard className="hover-card transition-all duration-200">
              <Profile />
            </HoverCard>
          </ProfileWrapper>

          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </MenuIcon>
        </RightSection>
      </NavbarWrapper>

      {menuOpen && (
        <MobileMenu>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/mens" onClick={() => setMenuOpen(false)}>
            Mens
          </Link>
          <Link to="/kids" onClick={() => setMenuOpen(false)}>
            Kids
          </Link>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
