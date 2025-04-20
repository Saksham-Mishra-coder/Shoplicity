import DownloadButton from "./DownloadButton/DownloadButton";
import React from "react";
import styled from "styled-components";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiTwitter,
  FiShare,
} from "react-icons/fi";

const FooterWrapper = styled.footer`
  background-color: #111;
  color: #eee;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: center;
`;

const Logo = styled.h2`
  font-size: 1.4rem;
  color: #fff;
  justify-content: center;
  margin: 0;
`;
const Logowraper = styled.div`
  hieght: 2.2rem;
  width: 2.2rem;
  background-color: #cc6c5c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tagline = styled.p`
  color: #ccc;
  font-size: 0.9rem;
`;

const Links = styled.ul`
  list-style: none;
  padding: 30px;

  li {
    margin-bottom: 0.5rem;
    cursor: pointer;
    color: #ccc;
    text-align: justify;

    &:hover {
      color: #fff;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 1.5rem;
  color: #ccc;
  width: 100%;
  margin-top: 2rem;

  a {
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #777;
  width: 100%;

`;
const ContactWrapper = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  max-width: 400px;
  padding: 1rem 0;
`;

const Paragraph = styled.p`
  margin: 0;

  text-align: justify;
`;
const Dev = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: #777;
  width: 100%;
  text-align: right;
  @media (max-width: 768px) {
   
    text-align: center;
  }
`;
const Bottom= styled.div`
@media (max-width: 768px) {
   
    flex-wrap: wrap;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Section>
        <div className="display flex gap-3">
          <Logowraper>
            <Logo>S</Logo>
          </Logowraper>
          <h1 className="text-2xl">Shoplicity</h1>
        </div>
        <h1 className="mb-3 mt-2 ">Shop Non-Stop On Shoplicity</h1>
        <Tagline>Your style, your way . Shop effortlessly. </Tagline>
        <Tagline>Secure|Cash on Delivery |Free Delivery.</Tagline>
        <DownloadButton />
      </Section>

      <Section>
        <h3 className="text-2xl ml-[2rem] text-justify">Careers</h3>
        <Links>
          <li>Become a supplier</li>
          <li>Hall of Fame</li>
          <li>Sitemap</li>
          <li>Shoplicity Science</li>
        </Links>
      </Section>
      <Section>
        <h3 className="text-xl ml-[2rem] text-justify ">Legal And Policies</h3>
        <Links>
          <li>Shoplicity Tech Blog</li>
          <li>Notice </li>
          <li>Returns </li>
          <li>Terms and Condition </li>
        </Links>
      </Section>
      <Section>
        <h3 className="text-xl text-justify">Contact Us</h3>

        <ContactWrapper>
          <Paragraph>Shoplicity Technologies Private Limited,</Paragraph>
          <Paragraph>CIN: U12345KA2025PTC012345</Paragraph>
          <Paragraph>4th Floor, Block-B, Orion Tech Park,</Paragraph>
          <Paragraph>Whitefield Road, Doddanekundi, Bangalore,</Paragraph>
          <Paragraph>Bangalore East, Karnataka, India, 560037</Paragraph>
          <Paragraph>
            E-mail address:
            <a href="mailto:support@shoplicity.com">support@shoplicity.com</a>
          </Paragraph>
          <Paragraph>© 2025 Shoplicity</Paragraph>
        </ContactWrapper>
      </Section>
      <Bottom className="flex justify-between w-[100%]">
        <Copyright>
          © {new Date().getFullYear()} Shoplicity. All rights reserved.
        </Copyright>
        <SocialIcons>
          <a href="#">
            <FiFacebook />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <FiMail />
          </a>
          <a href="#">
            <FiShare />
          </a>
        </SocialIcons>
        <Dev>Designed by:- Saksham Mishra</Dev>
      </Bottom>
    </FooterWrapper>
  );
};

export default Footer;
