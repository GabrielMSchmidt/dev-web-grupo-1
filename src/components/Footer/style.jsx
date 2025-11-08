import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #0d1b2a;
  color: #fafafa;
  text-align: center;
  padding: 40px 20px;
  font-family: "Poppins", sans-serif;
  margin-top: 60px;
  border-top: 3px solid #066be0;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #66a3ff;
`;

export const FooterDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  color: #e6e6e6;
`;

export const FooterCredits = styled.p`
  margin-top: 25px;
  font-size: 0.9rem;
  color: #b3b3b3;

  a {
    color: #66a3ff;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #ffffff;
    }
  }
`;